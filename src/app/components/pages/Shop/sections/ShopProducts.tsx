import { ArrowRightOutlined, MobileOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import SectionTitle from "../../Home/SectionTitle";

const products = [
  { name: "Men's Ihram Set", detail: "2 pieces · Seamless", price: "2,450" },
  { name: "Women's Prayer Garment", detail: "Premium quality", price: "3,250" },
  { name: "Travel Money Belt", detail: "Secure & comfortable", price: "1,250" },
  { name: "Umrah Travel Backpack", detail: "Spacious & durable", price: "5,900" },
  { name: "Travel Prayer Mat", detail: "Lightweight & foldable", price: "1,450" },
  { name: "Umrah Slippers", detail: "Comfortable & lightweight", price: "1,150" },
  { name: "Travel Toiletry Bag", detail: "Compact & organized", price: "1,950" },
  { name: "Digital Tasbih Counter", detail: "Simple and easy to use", price: "850" },
  { name: "Ihram Towel · Extra", detail: "Soft & absorbent", price: "750" },
  { name: "Travel Water Bottle", detail: "Clear · Leak resistant", price: "950" },
  { name: "UV Protection Umbrella", detail: "Compact · Stay protected", price: "1,850" },
  { name: "Travel Packing Cubes", detail: "Set of 3 · Organize with ease", price: "2,250" },
];

const orderUrl = (name: string) =>
  `https://wa.me/923001234567?text=${encodeURIComponent(`Assalamualaikum, I would like to order: ${name}`)}`;

export default function ShopProducts() {
  return (
    <section className="shop-collection home-section bg-[#fbfaf7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Our collection" title="Umrah essentials" centered description="Carefully selected products for your spiritual journey." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <article key={product.name} className="shop-product overflow-hidden rounded-2xl border border-[#eee9e0] bg-white p-3 shadow-[0_12px_38px_rgba(36,50,44,.055)]">
              <div className={`product-sprite product-sprite-${index + 1}`} role="img" aria-label={product.name} />
              <div className="px-2 pb-2 pt-4">
                <h2 className="min-h-12 text-base font-extrabold leading-6 text-[var(--fr-navy)]">{product.name}</h2>
                <p className="mt-1 text-xs capitalize text-[#777e7b]">{product.detail}</p>
                <p className="mt-2 text-xl font-extrabold text-[var(--fr-navy)]">PKR {product.price}</p>
                <Button href={orderUrl(product.name)} target="_blank" rel="noreferrer" block className="home-primary mt-4 h-10! font-bold!" icon={<WhatsAppOutlined />}>Order on WhatsApp</Button>
              </div>
            </article>
          ))}
        </div>

        <div className="shop-order-cta mt-10 grid items-center overflow-hidden rounded-3xl border border-[#e6e0d6] px-6 py-9 sm:px-10 lg:grid-cols-[.55fr_1.45fr_.8fr] lg:gap-8 lg:px-14">
          <div className="hidden justify-center lg:flex">
            <span className="grid h-28 w-20 rotate-6 place-items-center rounded-2xl border-4 border-[var(--fr-navy)] bg-white text-5xl text-[#16a36a] shadow-xl"><MobileOutlined /></span>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--fr-accent)]">Simple & quick</p>
            <h2 className="home-serif mt-3 text-3xl text-[var(--fr-navy)] sm:text-4xl">Place your order on WhatsApp</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#626c68]">Browse our Umrah essentials and order easily via WhatsApp. Our team will assist you with product details and delivery.</p>
          </div>
          <Button href="https://wa.me/923001234567?text=Assalamualaikum%2C%20I%20would%20like%20to%20order%20Umrah%20essentials" target="_blank" rel="noreferrer" shape="round" className="home-primary mt-6 h-12! px-7! font-bold! lg:mt-0" icon={<WhatsAppOutlined />}>
            Chat on WhatsApp <ArrowRightOutlined className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
