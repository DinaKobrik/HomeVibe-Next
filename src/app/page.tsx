import { Button, Heading, P } from "@/components/ui";

export default async function HomePage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <Heading level="h1">The Beauty Of Design</Heading>
      <Heading level="h2" color="white">
        The Beauty Of Design
      </Heading>
      <Heading level="h3">The Beauty Of Design</Heading>
      <P>
        Both functional and decorative, which feels artisan-made but has a
        contemporary look.
      </P>
      <Button>EXPLORE</Button>
      <Button variant="secondary">SHOW</Button>
      <Button variant="outlined">120$</Button>
    </main>
  );
}
