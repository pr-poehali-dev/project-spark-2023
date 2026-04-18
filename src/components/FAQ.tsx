import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Какие покрытия вы укладываете?",
    answer:
      "Мы работаем со всеми видами напольных покрытий: паркет штучный и инженерный, ламинат, LVT/кварцвинил, керамогранит и плитка, наливные полы (эпоксид, полиуретан), ковровые покрытия и спортивные полы. Поможем выбрать оптимальный вариант под ваши задачи.",
  },
  {
    question: "Сколько времени займёт укладка?",
    answer:
      "Сроки зависят от площади и вида покрытия. Стандартная квартира 50–80 м² — 3–5 рабочих дней. Коммерческий объект рассчитывается индивидуально. Называем точные сроки после замера.",
  },
  {
    question: "Вы делаете замер и смету бесплатно?",
    answer:
      "Да, выезд замерщика и составление сметы — бесплатно. Приедем в удобное время, измерим площадь, учтём сложность укладки и дадим точную стоимость без скрытых доплат.",
  },
  {
    question: "Нужна ли подготовка основания?",
    answer:
      "Качественная укладка возможна только на ровное и прочное основание. Мы выполняем стяжку, шлифовку, грунтовку и выравнивание самовыравнивающимися смесями — всё под ключ.",
  },
  {
    question: "Даёте ли вы гарантию?",
    answer:
      "Да, на все виды работ даём письменную гарантию. На укладку паркета и инженерной доски — 3 года, на плитку и наливные полы — 5 лет. Если в гарантийный период возникнут проблемы по нашей вине, устраним бесплатно.",
  },
  {
    question: "Как начать работу?",
    answer:
      "Оставьте заявку или позвоните нам. Согласуем время замера, приедем, сделаем смету и обсудим сроки. После согласования заключаем договор и приступаем к работе.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}