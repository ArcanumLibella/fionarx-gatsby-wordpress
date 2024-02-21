import React from "react";
import { BlockRendererProvider } from "@webdeveducation/wp-block-tools";
import { blockRendererComponent } from "../config/blockRendererComponent";
import { Hero } from "../components/organisms/Hero/Hero";
import { PageLayout } from "../components/layouts";

const Page = (props) => {
  const { title, blocks, isFrontPage } = props.pageContext

  return (
      isFrontPage ? (
        <Hero />
      ) : (
        <PageLayout title={title}>
          <BlockRendererProvider 
            allBlocks={blocks} 
            renderComponent={blockRendererComponent}
          />
        </PageLayout>
      )
  )
}

export default Page;