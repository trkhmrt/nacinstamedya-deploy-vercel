import BlurFade from "@/components/magicui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 500 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function BlurFadeDemo() {
    return (
        <section id="photos" className="bg-black min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="columns-2 gap-4 sm:columns-3">
                    {images.map((imageUrl, idx) => (
                        <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                            <img
                                className="mb-6 rounded-2xl shadow-lg object-cover max-w-full h-auto"
                                src={imageUrl}
                                alt={`Random stock image ${idx + 1}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
