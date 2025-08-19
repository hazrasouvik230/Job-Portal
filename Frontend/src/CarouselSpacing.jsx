import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Robert Fox",
    role: "UI/UX Designer",
    image: "/avatars/robert.jpg",
    review:
      "Ut ultricies sapien hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.",
  },
  {
    name: "Bessie Cooper",
    role: "Creative Director",
    image: "/avatars/bessie.jpg",
    review:
      "Mauris eget enim odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse vel dui vulputate augue condimentum ornare.",
  },
  {
    name: "Jane Cooper",
    role: "Photographer",
    image: "/avatars/jane.jpg",
    review:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Ronald Richards",
    role: "Marketing Specialist",
    image: "/avatars/ronald.jpg",
    review:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    name: "Jenny Wilson",
    role: "Product Manager",
    image: "/avatars/jenny.jpg",
    review:
      "Suspendisse potenti. Cras in massa a lorem vulputate tincidunt. Nullam tincidunt, justo eget.",
  },
  {
    name: "Devon Lane",
    role: "Software Engineer",
    image: "/avatars/devon.jpg",
    review:
      "Etiam blandit, nulla eu scelerisque commodo, arcu magna malesuada sem, sit amet bibendum arcu dolor at justo.",
  },
  {
    name: "Leslie Alexander",
    role: "Graphic Designer",
    image: "/avatars/leslie.jpg",
    review:
      "Morbi sit amet semper lacus, in mollis libero. Praesent eget tincidunt justo.",
  },
  {
    name: "Courtney Henry",
    role: "Brand Strategist",
    image: "/avatars/courtney.jpg",
    review:
      "Vivamus nec ex ac lorem suscipit porta. Proin dapibus est at tristique ultrices.",
  },
  {
    name: "Albert Flores",
    role: "Content Creator",
    image: "/avatars/albert.jpg",
    review:
      "Curabitur feugiat, tortor non condimentum tincidunt, sapien sapien posuere tortor, et vulputate odio lorem at lacus.",
  },
  {
    name: "Kristin Watson",
    role: "Project Coordinator",
    image: "/avatars/kristin.jpg",
    review:
      "Integer nec ligula nec lorem lacinia congue. Vestibulum ante ipsum primis in faucibus orci luctus et.",
  },
]

export function CarouselSpacing() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center pt-12 pb-12 px-4">
      <h2 className="text-2xl font-semibold mb-8 text-center">Clients Testimonial</h2>

      <Carousel className="w-full max-w-6xl">
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 mt-4 mb-6">
              <Card className="h-full shadow-lg bg-white rounded-xl">
                <CardContent className="flex flex-col p-6 space-y-4">
                  {/* Stars */}
                  <div className="flex">
                    {Array(5).fill(null).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-yellow-400"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.865 1.4-8.168L.132 9.211l8.2-1.193z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    “{testimonial.review}”
                  </p>

                  {/* User Info */}
                  <div className="flex items-center mt-2">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious className="" />
        <CarouselNext className="" /> */}
        
        {/* <div className="flex justify-center absolute border-red-600 mt-12 sm:hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div> */}
      </Carousel>
    </div>
  )
}
