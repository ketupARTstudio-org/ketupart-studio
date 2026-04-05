import Link from "next/link";

type PolicyPageProps = {
  title: string;
  html: string;
};

export function PolicyPage({ title, html }: PolicyPageProps) {
  return (
    <main className="policy-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-center mb-3">
              <Link href="/">
                <img
                  className="policy-logo-light"
                  src="/assets/abstract/media/logo-2.png"
                  alt="KetupArt Studio"
                  style={{ maxWidth: 220 }}
                />
                <img
                  className="policy-logo-dark"
                  src="/assets/abstract/media/logo-3.png"
                  alt="KetupArt Studio"
                  style={{ maxWidth: 220 }}
                />
              </Link>
            </div>
            <div className="card shadow-sm">
              <div className="card-body policy-content">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
