import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quia aut eius quibusdam
              possimus corrupti porro molestiae dolorem totam labore incidunt quam est ducimus magni
              ipsam, inventore laudantium fugiat recusandae fugit ipsum officiis vitae. Laborum
              libero fuga tenetur similique alias est! Laboriosam, earum reprehenderit quae dolor
              aliquam voluptate provident? Corrupti officia ut beatae magnam dignissimos a
              exercitationem quidem, voluptas praesentium error laudantium eveniet, dolorum harum
              vitae inventore? Impedit quasi commodi voluptatibus fugiat. Voluptas quae quis
              assumenda quo. Eveniet fugiat molestiae odio ea sit esse laborum, iste ipsa.
              Laudantium optio amet unde quam itaque, accusamus hic nisi velit necessitatibus ipsa
              beatae.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quia aut eius quibusdam
              possimus corrupti porro molestiae dolorem totam labore incidunt quam est ducimus magni
              ipsam, inventore laudantium fugiat recusandae fugit ipsum officiis vitae. Laborum
              libero fuga tenetur similique alias est! Laboriosam, earum reprehenderit quae dolor
              aliquam voluptate provident? Corrupti officia ut beatae magnam dignissimos a
              exercitationem quidem, voluptas praesentium error laudantium eveniet, dolorum harum
              vitae inventore? Impedit quasi commodi voluptatibus fugiat. Voluptas quae quis
              assumenda quo. Eveniet fugiat molestiae odio ea sit esse laborum, iste ipsa.
              Laudantium optio amet unde quam itaque, accusamus hic nisi velit necessitatibus ipsa
              beatae.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
