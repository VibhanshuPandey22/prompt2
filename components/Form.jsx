import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="flex flex-col mt-10 max-lg:max-w-screen-lg max-lg:mx-14 lg:max-w-screen-lg lg:mx-14 max-md:max-w-screen-md max-md:mx-12 max-sm:max-w-screen-sm max-sm:mx-8">
      <h1>
        <span className="text-5xl max-sm:text-3xl font-satoshi font-extrabold tracking-tight text_gradient">
          {type} Post
        </span>
      </h1>
      <p className=" max-sm:text-sm text-gray-500 font-satoshi tracking-tight mt-3">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform...
      </p>

      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 w-full flex flex-col"
      >
        <label>
          <span className="font-satoshi tracking-tight font-semibold text-gray-600 text-lg">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) =>
              setPost({
                ...post,
                prompt: e.target.value,
              })
            }
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi tracking-tight font-semibold text-gray-600 text-lg">
            Tag{" "}
            <span className="font-normal text-gray-500">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <textarea
            value={post.tag}
            onChange={(e) =>
              setPost({
                ...post,
                tag: e.target.value,
              })
            }
            placeholder="Tag(product, webdevelopment, idea)"
            required
            className="form_input"
          />
        </label>

        <div className="mt-7 flex flex-end gap-5">
          <Link
            href="/"
            className=" font-satoshi tracking-tight text-gray-500 hover:text-gray-700 transition-all duration-150"
          >
            Cancel
          </Link>

          <button
            className=" rounded-full px-3 py-1 bg-gray-800 text-white hover:bg-black transition-all duration-150"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
