import Image from 'next/image'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
      <div className="mb-8">
        <Image
          src="/logo_combined_dark.png"
          alt="Guto Fernandes Endurance Coach"
          width={240}
          height={56}
          className="h-12 w-auto"
        />
      </div>
      {children}
    </div>
  )
}
