import React from "react";
import { Text } from "../components/atoms/Text";
import { Separator } from "../components/atoms/Separator";
import { Button } from "../components/molecules/Button";

export const blockRendererComponent = (block) => { // TODO: A remplacer par le PageLayout
  console.log("BLOCK : ", block);
  const { content } = block.attributes;
  // const content = block.attributes.content;
  // <Text key={block.id} type="heroTitle">{/* {content} */} H2</Text>
  
  switch (block.name) {
    case "core/heading": {
      return (
        <Text key={block.id} type="title" className="text-white">{content}</Text>
      )
    }
    case "core/paragraph": {
      return (
        <Text key={block.id} type="paragraph" className="mb-8 text-white">{content}</Text>
      )
    }
    case "core/separator": {
      return (
        <Separator />
      )
    }
    case "core/button": {
      return (
        <Button label={content} /* path={}  */className="" />
      )
    }
    // default: {
    //   return <Text key={block.id} type="paragraph">{content}</Text>

    // }
  }
}