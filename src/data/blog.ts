export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    category: string;
    image: string;
    desc: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "Frequently Asked Questions About Teeth Whitening",
        slug: "teeth-whitening-faq",
        date: "March 12, 2024",
        category: "Aesthetic Dentistry",
        image: "/blog-whitening.webp",
        desc: "Professional teeth whitening processes and things to consider at home.",
        content: `
      <h2>What is Teeth Whitening and Who is it For?</h2>
      <p>The most important complement to an aesthetic smile is undoubtedly white and bright teeth. Teeth whitening (bleaching) is the process of removing discolorations that penetrate the enamel and dentin layers of the tooth using special agents. Various foods (coffee, tea, wine) and tobacco use cause teeth to yellow over time. In these cases where daily brushing is insufficient, professional whitening comes into play.</p>
      
      <img class="w-full h-80 object-cover rounded-[2rem] my-10 shadow-lg" src="/s4.webp" alt="Teeth Whitening Procedure" />
      
      <h3>Whitening Methods: Clinical or At-Home?</h3>
      <p>In modern dentistry, two methods are mainly preferred:</p>
      <ul>
        <li><strong>Clinical (In-Office) Whitening:</strong> It is the activation of high-concentration whitening gels with laser or LED light sources, exclusively under the supervision of a dentist. Even in a single session, a visible lightening of up to 3-4 shades can be achieved.</li>
        <li><strong>At-Home Whitening:</strong> It is performed at home using transparent aligners prepared by your physician by taking measurements from your mouth and low-concentration gels. It generally requires regular use for 1-2 weeks. Sometimes it is recommended in combination to support the permanence of the office-type application.</li>
      </ul>

      <h3>Criteria to Consider After Application</h3>
      <p>Following the whitening procedure, it is vital to adhere to a nutritional routine called the <strong>"white diet"</strong> for 48 hours. Coloring agents such as tea, coffee, tomato paste, cherry juice, and cigarettes must be strictly avoided. Additionally, temporary hot-cold sensitivity may be experienced, and fluoride toothpastes will help you overcome this process comfortably.</p>
      
      <p><em>Do not forget to get support from our expert physician staff and keep up with your routine check-ups for a healthy and permanently white smile.</em></p>
    `
    },
    {
        title: "How Should Post-Implant Care Be?",
        slug: "post-implant-care",
        date: "March 08, 2024",
        category: "Implantology",
        image: "/blog-implant.webp",
        desc: "Oral hygiene and the recovery process after successful implant treatment.",
        content: `
      <h2>The Importance of Implant Treatment and the Recovery Process</h2>
      <p>Dental implants are titanium screws placed in the jawbone to replace missing teeth and mimic the real tooth root. The post-operative period is critical for the implant to successfully fuse with the bone (osseointegration) and be used healthily for a lifetime.</p>
      
      <img class="w-full h-80 object-cover rounded-[2rem] my-10 shadow-lg" src="/s1.webp" alt="Implant Treatment" />
      
      <h3>The Day of the Operation and the First 48 Hours</h3>
      <p>The first hours after surgical intervention are the most sensitive time when the tissue begins to heal:</p>
      <ul>
        <li>Keep the sterile tampon placed by your physician in your mouth by applying pressure for the specified time.</li>
        <li>To reduce the risk of bleeding and swelling, avoid hot foods, vigorous mouth rinsing, and spitting for the first 24 hours.</li>
        <li>Applying cold compresses (ice) externally to the operation area at regular intervals will help minimize potential edema and swelling.</li>
      </ul>

      <h3>Oral Hygiene and Cleaning Routine</h3>
      <p>Keeping the surgical area clean prevents any risk of infection. The day after the operation, oral hygiene should be maintained with soft brushing techniques recommended by your physician and chlorhexidine-containing mouthwashes. After healing is complete, brushing, interdental brushes, and flossing applied to natural teeth must be continued with great care for implants as well.</p>

      <h3>Nutritional Habits and Warnings</h3>
      <p>During the recovery process, very hard, shelled foods should be avoided, and puree-consistency, warm delicacies should be preferred. In addition, it has been clinically proven that smoking significantly slows down tissue healing and can reduce implant success. Tobacco use is definitely not recommended during this period.</p>
    `
    },
    {
        title: "When is the First Dental Examination for Children?",
        slug: "first-dental-examination-for-children",
        date: "March 05, 2024",
        category: "Pedodontics",
        image: "/blog-pediatric.webp",
        desc: "The importance of early diagnosis for our little friends to have a healthy smile.",
        content: `
      <h2>The Age and Importance of the First Dentist Visit</h2>
      <p>Pedodontics (pediatric dentistry) specialists recommend that the first dental examination be performed with the eruption of the first milk tooth (usually when the baby reaches 6 months or 1 year of age) so that children have complete dental development. This visit, which is considered very early, actually provides families with accurate and professional information about the baby's diet and dental cleaning.</p>
      
      <img class="w-full h-80 object-cover rounded-[2rem] my-10 shadow-lg" src="/s6.webp" alt="Pediatric Dentistry" />
      
      <h3>Baby Bottle Tooth Decay and Early Intervention</h3>
      <p>Putting children to sleep early on with a bottle, especially with sweetened milk, honey-added liquids, or fruit juices, can cause very common and rapidly progressing cavities called "Baby Bottle Tooth Decay." Early examinations play a major role in early detection of such risky habits by the physician and resolving them without causing serious damage.</p>

      <h3>Will Milk Teeth "Fall Out Anyway"?</h3>
      <p>Neglecting cavities in milk teeth with the popular belief that they "will fall out anyway" directly interrupts the child's nutrition, speech, and pronunciation development. More importantly, milk teeth act as a kind of guide in the bone for the permanent teeth coming from below by preserving their place. Early extraction may necessitate wire treatment (orthodontic).</p>

      <h3>Establishing a Tooth Brushing Habit</h3>
      <ul>
        <li>In infancy, as soon as the teeth emerge, they should be cleaned by gently wiping them with a clean, damp cheesecloth or finger brushes recommended by the physician.</li>
        <li>Be sure to consult your physician to use an age-appropriate amount and feature of fluoride-free or age-appropriate toothpaste.</li>
        <li>By gamifying tooth brushing in young children and turning it into a fun routine, the child should be encouraged to adopt this valuable habit for life.</li>
      </ul>
    `
    }
];
