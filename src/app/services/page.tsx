import CategoryTabs from '@/components/CategoryTabs'
import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers'
import SearchModal from '@/components/SearchModal'
import React, { Fragment } from 'react'

export default function page() {
  return (
<Fragment >
        <MyHeaders currentPage="Services" />
           <SearchModal />
           <CategoryTabs />

        <Footer />
</Fragment>
  )
}
