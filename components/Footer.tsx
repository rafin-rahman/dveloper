import { socials } from "@/utils/company";

export default function Footer() {
  return (
    <div className={"container mx-auto px-6 py-5 text-center"}>
      <div className={"opacity-50"}>
        <p>
          ©2024 Dveloper.io
          <a href={socials.github} target={"_blank"}>
            <img
              className={"inline-block ml-3"}
              src="/images/icons/github.svg"
              alt="Github"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
