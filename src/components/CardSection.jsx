import Card from "./Card";
import image from "../assets/image.png" ;
function CardSection() {
  return (
    <section className="flex gap-3 justify-center">
      <Card
        image = {image} 
        name="hello world"
        description="hello i am a boy that likes to sleep"
      />
      <Card name="lorem2" description="hello i am a to sleep" />
      <Card
        name="kwqsasuygd"
        description=" a boy that likes to sleep"
      />
    </section>
  );
}

export default CardSection;
