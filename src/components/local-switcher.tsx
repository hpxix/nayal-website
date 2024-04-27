import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import IntantionalizationSVG from "@/app/images/intantionalization";

export default function LocalSwitcher({ children }: any) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const toggleLanguage = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className={children}>
      <p className="sr-only text-black">Change language</p>
      <div className="flex mx-6">
        <IntantionalizationSVG />
        <button
          onClick={() => toggleLanguage("en")}
          disabled={isPending}
          className={`mx-3 ${localActive === "ar" ? "text-white" : "text-xl"}`}
        >
          En
        </button>
        <div className="bg-white block" style={{ width: "2px" }}></div>
        <button
          onClick={() => toggleLanguage("ar")}
          disabled={isPending}
          className={`mx-3 ${localActive === "ar" ? "text-xl" : "text-sm"}`}
        >
          Ar
        </button>
      </div>
    </div>
  );
}
