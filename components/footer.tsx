"use client";

import Link from "next/link";
import {
  Dice1Icon as Dice,
  Facebook,
  Twitter,
  Instagram,
  DiscIcon as Discord,
  Mail,
  MapPin,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/client";
import Image from "next/image";
import FooterLogoSection from "./FooterLogoSection";

export default function Footer() {
  const { t, locale } = useTranslation();

  return (
    <footer className="bg-slate-blue text-stone-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <FooterLogoSection />
            <div className="flex gap-4">
              <Link href="#" className="text-stone-300 hover:text-golden-amber">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-stone-300 hover:text-golden-amber">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-stone-300 hover:text-golden-amber">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-stone-300 hover:text-golden-amber">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/events`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("nav.events")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/membership`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("nav.membership")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">
              {t("footer.legal")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/accessibility`}
                  className="text-stone-300 hover:text-golden-amber"
                >
                  {t("footer.accessibility")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium text-white">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-golden-amber" />
                <span className="text-stone-300">
                  info@talesofbrusshell.be
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-golden-amber" />
                <span className="text-stone-300">{t("footer.location")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-xs text-stone-400">
          <p>
            &copy; {new Date().getFullYear()} Tales of Bruss'hell.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
