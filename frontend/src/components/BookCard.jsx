export default function BookCard() {
  const bookData = {
    kind: "books#volume",
    id: "D9VEIQAACAAJ",
    etag: "WR7fLR2JGM0",
    selfLink: "https://www.googleapis.com/books/v1/volumes/D9VEIQAACAAJ",
    volumeInfo: {
      title: "Paraxial Light Beams with Angular Momentum",
      authors: ["A. Bekshaev", "Marat Samuilovich Soskin", "M. Vasnetsov"],
      publishedDate: "2008",
      description:
        "Fundamental and applied concepts concerning the ability of light beams to carry a certain mechanical angular momentum (AM) with respect to the propagation axis are reviewed and discussed in this book. In paraxial beams, the total beam AM can be represented as a sum of the spin (SAM) and orbital (OAM) angular momentums. SAM is an attribute of beams with elliptic (circular) polarisation and is related to the spin of photons. OAM is conditioned by the macroscopic transverse energy circulation and does not depend on the beam polarisation state. In turn, the OAM can be divided in two components which reflect different forms of this energy circulation. Important class of beams with OAM, are vortex beams with helical geometric structure. They constitute a full set of azimuthal harmonics characterised by integer index l each possessing AM l per photon. Arbitrary paraxial beam can be represented as a superposition of helical beams with different l. Models of helical beams and methods of their practical generation are discussed. Transverse energy flows in light beams can be described on the basis of a mechanical model assimilating them to fluid bodies; remarkably, in a helical beam the transverse flow distribution exactly corresponds to the laws of the vortex behaviour in other fields of physics (fluid dynamics, electricity). Experiments on transmission of the beam AM to other bodies (optical elements and to suspended microparticles) are discussed. Research prospects and ways of practical utilisation of optical beams with AM are discussed.",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=D9VEIQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=D9VEIQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
    },
  };
  return (
    <div className="mx-auto bg-white shadow-lg my-1 rounded-lg overflow-hidden">
      <div className="flex">
        <div className="">
          <img
            className="rounded-lg mx-4 mt-4"
            src={
              bookData?.volumeInfo?.imageLinks.smallThumbnail ||
              "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            }
            alt={bookData?.volumeInfo?.title}
          />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-xl font-semibold mb-2">
            {bookData?.volumeInfo?.title || "jkdaflak ksd "}
          </h1>
          {bookData?.volumeInfo?.authors &&
            bookData?.volumeInfo?.authors.map((author, index) => (
              <div className="flex" key={index}>
                <div className="text-sm text-gray-700">{author}</div>
              </div>
            ))}
          <p className=" text-pure-greys-500 mt-2 text-sm">
            {bookData?.volumeInfo?.description
              ? `${bookData?.volumeInfo?.description.slice(0, 115)}...`
              : "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
}
