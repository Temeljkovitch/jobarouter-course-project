import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
        doloribus? Omnis temporibus, necessitatibus inventore ducimus non dolor
        possimus earum cum velit debitis numquam exercitationem qui corrupti
        fuga dicta reiciendis libero.
      </div>
    </div>
  );
};

export default CareerDetails;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);

  if (!response.ok) {
    throw Error("Could not find that career");
  }

  return response.json();
};
