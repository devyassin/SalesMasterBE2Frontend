import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { handleGigForm } from "../../store/ProductSlice";
import { path } from "../../constants/endpoints";

type Props = {
  produitImg: string;
  formType: string;
};

const InputFileUpload = ({ produitImg, formType }: Props) => {
  const dispatch = useDispatch<any>();
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>("");
  const handleChange = async (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (event.target instanceof HTMLInputElement && event.target.files) {
      const file = event.target.files[0];
      setIsUploaded(true);
      setImageName(file.name);
      dispatch(
        handleGigForm({
          name: "image",
          value: file,
        })
      );
    } else {
      let { name, value }: any = event.target;
      dispatch(handleGigForm({ name, value }));
    }
  };
  return (
    <div className="flex items-center justify-center w-full col-span-2">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-[#2d3748] bg-[#4a5568] border-[#718096] hover:border-[#a0aec0] "
      >
        {formType == "add" ? (
          !isUploaded ? (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-[#cbd5e0]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-[#cbd5e0]">
                <span className="font-semibold">
                  Click to upload a product image
                </span>
              </p>
              <p className="text-xs text-[#cbd5e0]">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          ) : (
            <div>{imageName}</div>
          )
        ) : (
          <img
            src={`${
              produitImg.startsWith("http")
                ? produitImg
                : `${path}${produitImg}`
            }`}
            alt="pic"
            className="h-[220px] w-full rounded-lg  border-white"
            width={1000}
            height={1000}
          />
        )}

        {formType != "update" && (
          <input
            onChange={handleChange}
            name="image"
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        )}
      </label>
    </div>
  );
};

export default InputFileUpload;
