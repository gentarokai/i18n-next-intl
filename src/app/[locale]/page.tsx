import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return <p className="text-sm text-gray-500">{t("title")}</p>;
}
