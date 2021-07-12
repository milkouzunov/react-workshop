export default function Home() {
  return (
    <section className="basic">
        <h1>Welcome to pet my pet!</h1>

      <style jsx>
        {`
          .basic {
            background: linear-gradient(
                rgba(250, 248, 248, 0.2),
                rgba(25, 167, 173, 0.2)
              ),
              url('https://thumbs.dreamstime.com/b/pets-standing-front-white-background-11785222.jpg') no-repeat center;
            background-size: cover;
            height: 85vh;
            position: relative;
            overflow: hidden;
          }
          .basic h1 {
            text-align: center;
            margin: 0rem;
            padding: 2rem 0 1rem 0;
          }
        `}
      </style>
    </section>
  );
}
