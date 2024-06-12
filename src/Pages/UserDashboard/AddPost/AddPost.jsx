import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SelectTags from "../../Home/Tags/SelectTags/SelectTags";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddPost = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (selected) => {
    if (selected.length <= 3) {
      setSelectedOptions(selected);
      setMessage("");
    } else {
      setMessage("You can only select up to 3 tags.");
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const currentTime = new Date().toISOString().slice(0, 19);
    const formData = {
      ...data,
      tags: selectedOptions.map((option) => option.value),
      postTime: currentTime,
      comments: []
    };
    axiosPublic.post('/posts', formData)
    .then((res) => {
        if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Posted",
              showConfirmButton: false,
              timer: 1500,
            });
            reset()
          }
    })

    // console.log(formData);
  };

  return (
    <div>
      <div className="card w-full p-4 flex justify-center shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Image</span>
            </label>
            <input
              {...register("authorImage", { required: true })}
              type="text"
              name="authorImage"
              placeholder="Author Image"
              className="input input-bordered"
              defaultValue={user?.photoURL}
              required
              readOnly
            />
            {errors.authorImage && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              {...register("authorName", { required: true })}
              type="text"
              name="authorName"
              className="input input-bordered"
              defaultValue={user.displayName}
              required
              readOnly
            />
            {errors.authorName && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              className="input input-bordered"
              defaultValue={user.email}
              required
              readOnly
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post Title</span>
            </label>
            <input
              {...register("postTitle", { required: true })}
              type="text"
              name="postTitle"
              placeholder="Post Title"
              className="input input-bordered"
              required
            />
            {errors.postTitle && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Post Description</span>
            </label>
            <textarea
              {...register("postDescription", { required: true })}
              name="postDescription"
              placeholder="Post Description"
              className="textarea textarea-bordered"
              required
            />
            {errors.postDescription && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">UpVote Count</span>
            </label>
            <input
              {...register("upVoteCount")}
              type="number"
              name="upVoteCount"
              value="0"
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">DownVote Count</span>
            </label>
            <input
              {...register("downVoteCount")}
              type="number"
              name="downVoteCount"
              value="0"
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tags</span>
            </label>
            <SelectTags
              selectedOptions={selectedOptions}
              handleChange={handleChange}
              message={message}
            ></SelectTags>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
