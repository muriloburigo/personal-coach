-- Products (training plan spreadsheets)
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  category text not null check (category in ('running', 'triathlon', 'cycling')),
  level text not null check (level in ('iniciante', 'intermediario', 'avancado')),
  duration_weeks int not null,
  price_cents int not null,
  training_peaks_url text,
  cover_image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Customers (authenticated users who purchase)
create table if not exists customers (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  created_at timestamptz not null default now()
);

-- Orders
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id),
  product_id uuid not null references products(id),
  status text not null default 'pending' check (status in ('pending', 'paid', 'cancelled')),
  price_cents int not null,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

-- RLS
alter table products  enable row level security;
alter table customers enable row level security;
alter table orders    enable row level security;

-- Anyone can read active products
create policy "public read active products" on products
  for select using (is_active = true);

-- Customers can read their own data
create policy "customers read own" on customers
  for select using (auth.uid() = id);

-- Customers can read their own orders
create policy "customers read own orders" on orders
  for select using (auth.uid() = customer_id);
