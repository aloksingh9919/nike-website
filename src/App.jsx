import{CustomerReviews,Footer,Hero,PopularProducts,Services,SpecialOffer,Subscribe,SuperQuality,Nav} from './Sections'
const App = () => {
  return (
    <main>
<Nav/>
      <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className=" padding">
        <SpecialOffer />
      </section>
      <section className=" bg-gray-100 padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16t w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  )
}

export default App