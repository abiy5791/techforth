import { useMemo, useState } from "react";
import { MainLayout } from "../components/MainLayout";
import cmiImg from "../../assets/images/cmi.png";
import iritechBkImg from "../../assets/images/iritech-bk.png";
import iritechMkImg from "../../assets/images/iritech-mk.png";
import ibKojakImg from "../../assets/images/ib-kojak.png";
import ibFiveOImg from "../../assets/images/ib-five-o.png";
import secuGenHamsterPro20Img from "../../assets/images/secu-gen-hamster-pro-20.png";
import secuGenHamsterPro30Img from "../../assets/images/secu-gen-hamster-pro-30.png";
import secuGenHamsterAirImg from "../../assets/images/secu-gen-hamster-air.png";
import miaxisSm91mImg from "../../assets/images/miaxis-sm-91m.png";
import logitechWebcamImg from "../../assets/images/logitech-webcam.png";
import techforthSbiImg from "../../assets/images/techforth-sbi.png";
import biometricLicenseImg from "../../assets/images/biometric-license.png";

const products = [
  {
    name: "CMI-Tech BMT-20",
    type: "Iris Scanner",
    price: "$1,299.00",
    description:
      "High-performance iris recognition scanner with dual-eye capture.",
    image: cmiImg,
  },
  {
    name: "Iritech BK 2121U",
    type: "Iris Scanner",
    price: "$1,499.00",
    description: "Binocular iris capture device for high-security enrollment.",
    image: iritechBkImg,
  },
  {
    name: "Iritech MK2120U",
    type: "Iris Scanner",
    price: "$1,199.00",
    description:
      "Monocular iris scanner for compact and efficient identification.",
    image: iritechMkImg,
  },
  {
    name: "IB Kojak",
    type: "Fingerprint Scanner",
    price: "$399.00",
    description: "Compact fingerprint scanner with high-resolution capture.",
    image: ibKojakImg,
  },
  {
    name: "IB Five-O",
    type: "Fingerprint Scanner",
    price: "$449.00",
    description: "Multi-finger capture device for rapid enrollment.",
    image: ibFiveOImg,
  },
  {
    name: "SecuGen Hamster Pro 20",
    type: "Fingerprint Scanner",
    price: "$299.00",
    description: "Optical fingerprint reader with USB connectivity.",
    image: secuGenHamsterPro20Img,
  },
  {
    name: "SecuGen Hamster Pro 30",
    type: "Fingerprint Scanner",
    price: "$349.00",
    description: "Enhanced optical sensor for superior image quality.",
    image: secuGenHamsterPro30Img,
  },
  {
    name: "SecuGen Hamster Air",
    type: "Fingerprint Scanner",
    price: "$379.00",
    description: "Touchless fingerprint capture for hygienic authentication.",
    image: secuGenHamsterAirImg,
  },
  {
    name: "Miaxis SM-91M",
    type: "Fingerprint Scanner",
    price: "$329.00",
    description: "Compact module with high-quality fingerprint capture.",
    image: miaxisSm91mImg,
  },
  {
    name: "Logitech Webcam",
    type: "Face Camera SBI",
    price: "$89.00",
    description:
      "High-definition camera for facial capture and authentication.",
    image: logitechWebcamImg,
  },
  {
    name: "Techforth Generic SBI",
    type: "Secure Biometric Interface",
    price: "$599.00",
    description:
      "MOSIP-compliant biometric capture device for fingerprint, face, and iris.",
    image: techforthSbiImg,
  },
];

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Iris Scanners",
    "Fingerprint Scanners",
    "Face Camera SBI",
  ];
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    if (selectedCategory === "Iris Scanners")
      return products.filter((p) => p.type === "Iris Scanner");
    if (selectedCategory === "Fingerprint Scanners")
      return products.filter((p) => p.type === "Fingerprint Scanner");
    if (selectedCategory === "Face Camera SBI")
      return products.filter((p) => p.type === "Face Camera SBI");
    return products;
  }, [selectedCategory]);

  return (
    <MainLayout>
      <main className="flex-1 flex flex-col pt-28 pb-16 px-6 sm:px-10 lg:px-20">
        {/* Hero / Featured Product */}
        <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 md:p-10 mb-14 shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[color:var(--primary)]/10 text-[color:var(--primary)] text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider border border-[color:var(--primary)]/20">
                  Catalog
                </span>
                <span className="muted text-xs font-medium tracking-wide">
                  Biometric Hardware Solutions
                </span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-current tracking-tight mb-4 font-[Manrope]">
                  Biometric Device Catalog
                </h1>
                <p className="muted text-base md:text-lg leading-relaxed max-w-xl">
                  Enterprise-grade iris scanners, fingerprint readers, and
                  multi-modal biometric systems for secure identity enrollment,
                  authentication, and access control.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  {
                    label: "Categories",
                    value: "Iris, Fingerprint, Face, SBI",
                  },
                  { label: "Compliance", value: "MOSIP, FBI Certified" },
                  { label: "Price Range", value: "$89 - $1,499" },
                  { label: "Support", value: "Technical Documentation" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="muted uppercase tracking-wide text-xs mb-1">
                      {item.label}
                    </p>
                    <p className="text-current font-mono text-sm">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-64 lg:h-80 rounded-2xl overflow-hidden relative border border-[color:var(--border)]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:`url(${biometricLicenseImg})`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-[color:var(--card)]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-[color:var(--primary)] font-mono mb-1">
                    FEATURED
                  </p>
                  <p className="text-current font-semibold">
                    Techforth Generic SBI
                  </p>
                  <p className="muted text-xs mt-1">
                    Multi-modal biometric device with MOSIP compliance for
                    fingerprint, face, and iris capture.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-current font-bold text-lg">$599</p>
                  <p className="muted text-xs">per unit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="section-label">Catalog</p>
              <h2 className="text-2xl font-bold text-current tracking-tight font-[Manrope]">
                Featured Peripherals &amp; Licenses
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-[color:var(--card)] text-current border border-[color:var(--border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.name}
                className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 hover:border-[color:var(--primary)]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[color:var(--primary)]/5 flex flex-col"
              >
                <div className="aspect-square w-full rounded-xl mb-4 overflow-hidden relative border border-[color:var(--border)]">
                  {product.type === "Software" && (
                    <div className="absolute top-2 right-2 z-10 bg-[color:var(--primary)] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {product.type}
                    </div>
                  )}
                  <div
                    className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        typeof product.image === "string" &&
                        product.image.startsWith("url(")
                          ? product.image
                          : `url('${product.image}')`,
                    }}
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-current font-semibold text-lg mb-1 group-hover:text-[color:var(--primary)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="muted text-sm mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default Products;
