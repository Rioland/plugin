'use client'






export default function SellerDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const router = useRouter()
  // const profile = useSelector((state: RootState) => state.sellersProfileReducer)

  // useEffect(() => {
  //   // Redirect if no KYC verification
  //   if (profile && (!profile.kycverifications || profile.kycverifications.length === 0)) {
  //     router.push('/dashboard/seller/onboarding')
  //   }
  // }, [profile, router])

  // Optional loading state if profile takes time to load

  // if (!profile) {
  //   return <Loading/>
  // }

  return <>{children}</>
}
