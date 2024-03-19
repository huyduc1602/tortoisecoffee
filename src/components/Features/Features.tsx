export default function Features() {
  const features = [
    {
      title: "Awesomae Aroma",
      description: "The coffee is brewed by first roasting the green coffee beans",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/fc140a9f-coffee-cup1_101y01y000000000000028.png"
    },
    {
      title: "High Quality",
      description: "The coffee is brewed by first roasting the green coffee beans",
      image: "https://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/e4daa532-quality1_101y01y000000000000028.png"
    },
    {
      title: "Pure Grades",
      description: "The coffee is brewed by first roasting the green coffee beans",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/56512642-coffee-beans1_101y01y000000000000028.png"
    },
    {
      title: "Proper Roasting",
      description: "The coffee is brewed by first roasting the green coffee beans",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/38361ca1-coffee1_101y01y000000000000028.png"
    }
  ];

  return (
    <section id="features" className="bg-light py-5">
      <div id="features" className="container mx-auto py-5 row">
        {features.map((item,key) => (
          <div className="col-md-3 d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay={50*key} key={key}>
            <img className="w-25 h-auto" src={item.image} alt={item.title} />
            <h3 className="font-weight-bold">{item.title}</h3>
            <p className="text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}