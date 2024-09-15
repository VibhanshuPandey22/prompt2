import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="flex-center flex-col mt-8 gap-2">
        <h1 className="text-7xl font-satoshi tracking-tight font-semibold p-3 text_gradient">
          {name}
        </h1>
        <p className="text-lg font-satoshi tracking-tight text-gray-600 font-medium">
          {desc}
        </p>
      </div>

      <div className="mt-10 prompt_layout mx-8">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
