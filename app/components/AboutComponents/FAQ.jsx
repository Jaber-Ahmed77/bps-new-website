import Accordion from "../ui/Accordion/Accordion";

export default function FAQ() {
  const data = [
    {
      title: "What information should I provide ?",
      content:
        "You have got to fill in a brief with your requirements for the site and send it back to the project manager. You also have to provide a content for the website pages.You have got to fill in a brief with your requirements for the site and send it back to the project manager. You also have to provide a content for the website pages.",
    },
    {
      title: "Do I need a separate hosting for the website?",
      content:
        "No, hosting is included with our service. If you prefer, you can use your own hosting.",
    },
    {
      title: "Is it possible to add some languages to my website?",
      content:
        "Yes, we support multi-language functionality to cater to your audience.",
    },
    {
      title: "I need to make changes to the website. What to do?",
      content:
        "Contact us, and we’ll assist with the updates, or access the admin panel if enabled.",
    },
    {
      title: "Tell me about the website development process?",
      content:
        "We start with requirements gathering, design, development, testing, and then deploy the website.",
    },
  ];
  return (
    <div className="h-fit flex flex-col justify-center items-center">
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <Accordion key={index} title={item.title} >
            <p className="text-sm text-neutral-800">{item.content}</p>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
