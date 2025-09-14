export default function ServicesSection(){
    type List = {
        title: String,
        description: String
    }
    const list:List[] = [
        {
            title:"Fast and Friendly Apps",
            description:""
        },
        {
            title:"Catchy Identity",
            description:""
        },
        {
            title:"Responsive Websites",
            description:""
        },
        {
            title:"Winning Pitch Decks",
            description:""
        },
        {
            title:"Social Media Graphics",
            description:""
        },
        {
            title:"Engaging Animations",
            description:""
        }
        
    ]
    return(
    <section className="min-h-screen w-full bg-orange-600 rounded-2xl px-6 sm:px-12 md:px-18 py-12 mt-20">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Left: Headings */}
    <div>
      <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        What we do
      </h2>
      <h3 className="text-white opacity-80 mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light">
        Services from A to Z helping you grow from 0 to N
      </h3>
    </div>

    {/* Right: List */}
    <ul className="list-disc pt-3 pb-3 pl-5 space-y-4 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
      {list.map((item, index) => (
        <li
          key={index}
          className="font-medium m-5 hover:translate-x-2 hover:opacity-80 transition-all duration-300 ease-in-out"
        >
          {item.title}
        </li>
      ))}
    </ul>
  </div>
</section>);
}