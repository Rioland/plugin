import BreadCrumb from '@/app/services/Components/BreadCrumb'
import CategoryTabs from '@/app/services/Components/CategoryTabs'
import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers'
import SearchModal from '@/components/SearchModal'
import React, { Fragment } from 'react'
import AllServiceSection from './Components/AllServiceSection'

export default function page() {
  return (
<Fragment >
        <MyHeaders currentPage="Services" />
           <SearchModal />
           <CategoryTabs />
           <BreadCrumb />
           <AllServiceSection  />
        <Footer />
</Fragment>
  )
}
