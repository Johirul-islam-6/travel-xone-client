import React from "react";
const Comment = () => {
  const handleReview = () => {};
  return (
    <section>
      {/* -----------header design Start----------- */}
      <div className="bg-[url('https://i.ibb.co/nkNGLdF/banner.png')] bg-no-repeat bg-cover bg-left-bottom pt-32 lg:pt-40 pb-4 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold  pl-10 lg:pl-20">
          Important Opinion
        </h1>
        <p className="pl-10 lg:pl-20 text-slate-400">
          Your opinion impact on our value
        </p>
      </div>
      {/* -----------header design end----------- */}
      <div className="bg-white px-10 md:px-20 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto items-center ">
          {/* ----------------Image---------------  */}
          <div>
            <img src="https://i.ibb.co/vx52jyB/form.png" loading="lazy" />
          </div>
          {/* --------------------form------------------- */}
          <div className="py-10 mx-4 lg:mx-0">
            <div className="border shadow-xl">
              <h2 className="text-center text-2xl bg-blue-500 py-2 text-white">
                Write Your Review
              </h2>
              <form onSubmit={handleReview}>
                <div className="p-5 md:p-16 lg:p-16">
                  <div className="form-control py-1 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered text-start text-md text-md"
                      required
                    />
                  </div>
                  <div className="form-control py-1 ">
                    <input
                      type="text"
                      name="designation"
                      placeholder="Designation"
                      className="input input-bordered text-start text-md"
                      required
                    />
                  </div>

                  <div className="form-control py-1 ">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      className="input input-bordered text-start text-md"
                      required
                    />
                  </div>
                  <div className="form-control py-1 ">
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-md text-md"
                    />
                  </div>

                  <div className="form-control py-1  border rounded-lg mt-3">
                    <textarea
                      name="message"
                      className="textarea text-start text-md"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <h2 className="text-start text-md font-semibold text-sky-500 text-xl mt-5">
                    Provide Ratings
                  </h2>
                  <div className="rating my-4 block text-start text-sm">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-500"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-500"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div className="form-control py-1  mt-6">
                    <input
                      className="btn border-none text-white font-semibold"
                      type="submit"
                      value="SUBMIT"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
