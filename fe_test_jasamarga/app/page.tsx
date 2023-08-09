'use client'

import Nav from "@/components/Nav";
import withAuth from "@/helpers/protectedRoutes"
import NoSSRWrapper from "@/components/NoSSRWrapper";


function Home() {
  return (
    <NoSSRWrapper>
      <section>
        <Nav />
        <div>Home</div>
      </section>
    </NoSSRWrapper>

  )
}

export default withAuth(Home);