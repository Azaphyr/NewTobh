import Image from "next/image";
import { useTranslation } from "@/lib/i18n/client";

export default function FooterLogoSection() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start gap-2">
      <Image
        src="/fullLogoWhite.png"
        alt="Tales of Bruss' Hell"
        width={320}
        height={120}
        priority
        className="relative z-10"
      />
      <p className="text-sm text-stone-300">{t("footer.description")}</p>
    </div>
  );
} 