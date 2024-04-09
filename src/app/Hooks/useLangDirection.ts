import { useRouter } from "next/router";

const useLangDirection = () => {
  const router = useRouter();

  return {
    rtl: router.locale === "ar",
    ltr: router.locale !== "en",
  };
};

export default useLangDirection;
