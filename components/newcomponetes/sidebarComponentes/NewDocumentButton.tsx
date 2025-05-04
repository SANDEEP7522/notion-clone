import { Button } from "../../ui/button";

const NewDocumentButton = () => {
  return (
    <div className="flex justify-centern items-center">
      <Button size="lg"
      className="w-full cursor-pointer hover:bg-gray-300"
      >Create Document</Button>
    </div>
  );
};

export default NewDocumentButton;
