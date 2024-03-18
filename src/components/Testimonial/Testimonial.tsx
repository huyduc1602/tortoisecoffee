import './Testimonial.scss';

export default function Testimonial() {
  const clients = [
    {
      avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/wrpf0n-team-b1_102s02s00000000000001o.jpg",
      opinion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "John Deo",
      job: "Founder"
    },
    {
      avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/15w7gjk-tyler-hardy_102s02s00000000000001o.jpg",
      opinion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "John Deo",
      job: "Founder"
    },
    {
      avatar: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/vzqxf1-2_102s03002s02s00000401o.jpg",
      opinion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "John Deo",
      job: "Founder"
    },
  ];
  return (
    <section id="testimonial" className="py-5">
      <div className="container text-center py-5">
        <h4>Testimonial</h4>
        <h2>What Our Clients Says</h2>
        <div className="clients row">
          {clients.map((client) => (
            <div className="col-md-4 client">
              <div className="avatar">
                <img src={client.avatar} alt="avatar" />
              </div>
              <div className="card">
                <div className="card-body">
                  <p className="card-text pt-5">{client.opinion}</p>
                  <h5 className="card-title pt-3">{client.name}</h5>
                  <span>{client.job}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}