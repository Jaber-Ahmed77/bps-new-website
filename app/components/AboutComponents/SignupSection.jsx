import FormInput from "../ui/inputs/FormInput";
import SignupCard from "./SignupCard";

export default function SignupSection() {
  return (
    <div className="w-full flex items-center gap-8 bg-[#1E1E1E]">
    <SignupCard />

    <div className={`flex-1 flex flex-col justify-center`}>
     <FormInput />
    </div>
  </div>
  );
}
