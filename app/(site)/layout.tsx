import AvailabilityBanner from "@/components/AvailabilityBanner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/** Wraps all standard pages with banner + nav + footer. The /rezerva-acum
 *  conversion landing lives outside this group, so it stays distraction-free. */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AvailabilityBanner />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
