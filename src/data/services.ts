export interface Service {
    slug: string;
    title: string;
    shortDesc: string;
    description: string;
    image: string;
    category: string;
    contentImages?: string[];
}

export const services: Service[] = [
    {
        slug: "implant-treatment",
        title: "Implant Treatment",
        category: "Surgical Treatments",
        shortDesc: "Artificial root procedure applied to functionally and morphologically compensate for missing teeth.",
        description: "Implant surgery is the process of building prosthetic structures on biologically compatible titanium materials (artificial roots) placed in the jawbone in cases of tooth deficiency. It is one of the current medical approaches in restoring chewing function and phonation (speech).\n\nThe operation process requires detailed analysis of panoramic and 3D radiological (tomography) imaging. Surgical planning is made after evaluating the patient's bone density, distances to anatomical spaces (sinus, nerve canals), and general systemic health status in detail. When necessary, bone volume can be increased with bone powder (graft) applications.\n\nFollowing the osseointegration (fusion of bone with titanium) period, which is the healing process, prepared porcelain or zirconium superstructures are placed. This treatment protocol allows preserving tissue integrity as it does not require any cutting procedures on neighboring healthy teeth.",
        image: "/s1.webp",
        contentImages: [
            "/s1.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "zirconium-crown",
        title: "Zirconium Crown",
        category: "Aesthetic Dentistry",
        shortDesc: "Highly biocompatible, metal-free prosthetic crown application.",
        description: "Crown and bridge prostheses prepared using zirconium (zirconium dioxide) material are frequently applied in cases seeking both function and aesthetics in dentistry. Because it does not contain a metal infrastructure, it does not cause gray discoloration at the gingival margins, and thanks to its light transmittance, it exhibits optical properties similar to natural tooth tissue.\n\nThis type of restoration offers a resistant solution in cases with shape and color deformities in the anterior region or crowning teeth with material loss in the posterior region. The biocompatibility of zirconium helps support gingival health in the long term and minimizes plaque retention.\n\nIn our clinical process, using digital impression methods (CAD/CAM), zirconium restorations in anatomical forms suitable for the patient's bite dynamics, gingival contours, and facial morphology are designed.",
        image: "/zirkonyum-kaplama.webp",
        contentImages: [
            "/zirkonyum-kaplama.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "e-max-crown",
        title: "E-MAX Crown",
        category: "Aesthetic Dentistry",
        shortDesc: "Lithium disilicate-based all-ceramics offering high translucency in anterior restorations.",
        description: "E-MAX crowns are restorations produced from a glass-ceramic material called lithium disilicate, which have high light transmittance (translucency). These all-ceramic systems with increased durability are applied in clinical practice to obtain the closest result to anatomical form and color harmony, especially in restoring anterior teeth.\n\nThe procedure is based on the principle of removing minimal tissue from the tooth surface. Closing diastemas (spaces) between teeth, prosthetically arranging mild crowding, or re-establishing the formation of teeth with structural defects are among the indications. The absence of a metal structure provides an aesthetic reflection similar to natural enamel tissue.\n\nIn patient analysis, mock-up (temporary preliminary trial) studies are performed by taking radiological examinations and photographic records. Thus, the patient's chewing function and aesthetic expectations are evaluated together with the physician before the permanent restoration is produced.",
        image: "/emax-kaplama.webp",
        contentImages: [
            "/emax-kaplama.webp",
            "/s14.webp"
        ]
    },
    {
        slug: "porcelain-crown",
        title: "Porcelain Crown",
        category: "Restorative Treatments",
        shortDesc: "Metal-supported classic crown treatment applied for the repair of teeth with excessive tissue loss.",
        description: "Traditional porcelain crowns (metal-supported porcelain crowns) are a robust restorative method applied in cases of excessive tissue loss caused by severe fluorosis, trauma, extensive caries, or root canal treatment in the tooth. While providing resistance against high chewing forces with the cast metal or chrome-cobalt alloys used in its infrastructure, dental functions are regained with the porcelain mass in the superstructure.\n\nBefore treatment, necessary preparation procedures are performed on the tooth and impressions are taken. Temporary crowns meet the patient's functional and phonetic needs during the laboratory period. The produced permanent crowns are carefully checked by the physician for bite and fit during trial sessions.\n\nPorcelain restorations are frequently planned especially in indications where durability should be prioritized in posterior molars. All materials and alloys are selected in accordance with current medical standards.",
        image: "/porselen-kaplama.webp",
        contentImages: [
            "/porselen-kaplama.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "teeth-whitening",
        title: "Teeth Whitening (Bleaching)",
        category: "Aesthetic Dentistry",
        shortDesc: "The process of resolving inorganic discolorations in tooth enamel with special agents and light source.",
        description: "Teeth whitening (bleaching) treatment is a clinical procedure applied to remove discolorations occurring in the microscopic pores of tooth enamel due to various factors (tea, coffee, tobacco use, aging, specific drug use, etc.). The application is based on the activation of gels containing hydrogen peroxide or carbamide peroxide with special light sources.\n\nThe 'in-office whitening' method applied under clinical conditions is performed directly under physician supervision. In the preparation stage, gingival borders are isolated with protective barriers. The number of sessions is planned according to the case's condition for the desired result. When deemed necessary, the treatment can be supported by preparing at-home whitening trays with physician recommendation.\n\nMinor sensitivities that may occur after the procedure are temporary. Since the whitening process does not affect artificial teeth (crowns, fillings), it requires physician supervision to create a comprehensive treatment plan in line with the existing restorations in the patient's mouth.",
        image: "/s4.webp",
        contentImages: [
            "/s4.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "composite-laminate",
        title: "Composite Laminate",
        category: "Aesthetic Dentistry",
        shortDesc: "Application of aesthetic filling material onto the tooth surface in layers (Bonding).",
        description: "Composite laminate (bonding) applications are the technique of directly applying polymer-based composite materials to the front surface of the tooth with special adhesive agents by the physician, with minimal or no abrasion from the tooth tissue. It can be applied in a single session to restore fractured teeth, mask minor crowding, or close gaps (diastemas) in anterior teeth.\n\nSince this method does not require a laboratory stage compared to porcelain laminates, it is a medical procedure that can yield fast results in the clinical environment. With light-curing properties and different layering techniques, the optical properties of dentin and enamel tissues are mimicked.\n\nThe applied composite surfaces are polished with detailed polishing procedures, making plaque retention difficult. The long-term stability of the restoration and its compatibility with the gingiva are monitored with periodic physician check-ups.",
        image: "/kompozit-lamine.webp",
        contentImages: [
            "/kompozit-lamine.webp",
            "/s4.webp"
        ]
    },
    {
        slug: "oral-and-maxillofacial-surgery",
        title: "Oral and Maxillofacial Surgery",
        category: "Surgical Treatments",
        shortDesc: "Surgical and medical diagnosis/treatment procedures of pathologies in the jaw, mouth, and facial region.",
        description: "Oral and Maxillofacial Surgery is the specialty branch dealing with the diagnosis and treatment of pathologies (cysts, tumors), infections, and traumas in teeth, jawbones, and adjacent surrounding tissues. Extraction of impacted or erupted wisdom teeth, apical resection (root end surgery), and treatment of jaw fractures are the main indications of this field.\n\nDuring the medical planning process, three-dimensional evaluations are made using advanced radiological analysis methods such as digital panoramic and volumetric tomography. Anatomical localizations, nerve canals, and sinus cavities are carefully mapped.\n\nAll surgical procedures are performed by strictly adhering to sterility protocols and with appropriate local medical anesthesia methods. Patients' post-surgical processes are also closely monitored by specialist physicians in terms of prescription and wound care.",
        image: "/s9.webp",
        contentImages: [
            "/s9.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "oral-diagnosis-and-radiology",
        title: "Oral Diagnosis and Radiology",
        category: "Diagnosis",
        shortDesc: "Multidisciplinary detection and imaging of diseases in the oral and maxillofacial region.",
        description: "Oral and Maxillofacial Radiology is the basic diagnosis department where intraoral and extraoral (jaw and facial region) examinations of patients are performed, and clinical findings are combined with radiographic images. An accurate medical treatment planning is only possible with a detailed and correct vision.\n\nIn our clinic, periapical X-rays, cephalometric films, and digital panoramic devices are actively used. These data are referenced in early detection of caries lesions, evaluating periodontal bone losses, impacted tooth positions, and temporomandibular joint (TMJ) disorders.\n\nThe obtained clinical and radiological data are shared with all other dental branches (endodontics, surgery, orthodontics, etc.) to create a personalized multidisciplinary treatment route for the patient. Radiation protocols are kept at international standards, prioritizing patient safety.",
        image: "/s10.webp",
        contentImages: [
            "/s10.webp",
            "/s9.webp"
        ]
    },
    {
        slug: "orthodontics",
        title: "Orthodontics",
        category: "Corrective Treatments",
        shortDesc: "Diagnosis, prophylaxis, and treatment of tooth alignment disorders and skeletal jaw incompatibilities.",
        description: "Orthodontics is the specialty area dealing with the treatment of skeletal anomalies in maxillary (upper) and mandibular (lower) jaw relations, crowding on the dental arch, and occlusion (bite) disorders. Incorrect bites can cause chewing dysfunctions, temporomandibular joint disorders, and periodontal tissue destruction in the long term.\n\nClinical applications vary according to the patient's age and dentition period. In addition to traditional metal fixed orthodontic agents, bracketless clear aligner systems and ceramic (clear) bracket technologies are current treatment alternatives for patients suitable for medical indications. Prophylactic (preventive) orthodontics and functional jaw orthopedics methods are also applied in patients during growth and development periods.\n\nTreatments are initiated by specialist physicians examining the patients' cephalometric and volumetric films digitally in millimeter isolation. Orthodontics not only optimizes oral health but also regulates biomechanics.",
        image: "/s3.webp",
        contentImages: [
            "/s3.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "endodontics",
        title: "Endodontics (Root Canal Treatment)",
        category: "Restorative Treatments",
        shortDesc: "The specialty branch that treats the diseases of the pulp tissue in the inner part of the tooth.",
        description: "Endodontics (root canal treatment) is the treatment applied in cases where the dental pulp (vascular-nerve bundle of the tooth) is irreversibly inflamed as a result of trauma, deep dentin caries, or secondary infections. This microsurgical procedure aims to remove affected and devitalized tissues from the canal system.\n\nIn clinical practice, micro-level disinfection and shaping procedures are performed using rubber dam isolation, electronic apex locators, and nickel-titanium rotary instruments. The enlarged and cleaned root canals are sealed three-dimensionally with tissue-friendly, biocompatible leak-proof filling materials (gutta-percha, etc.).\n\nEndodontic treatments performed correctly and in accordance with their indications ensure that the tooth preserves its function in the mouth, its resistance to chewing forces, and surrounding alveolar bone health for many years. In our clinic, retreatment (root canal renewal) procedures for teeth with lesions are also performed.",
        image: "/s11.webp",
        contentImages: [
            "/s11.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "pedodontics",
        title: "Pedodontics (Pediatric Dentistry)",
        category: "Preventive Treatments",
        shortDesc: "Diagnosis, treatment, and preventive follow-up of primary and permanent teeth of individuals in the 0-15 age group.",
        description: "Pedodontics (Pediatric Dentistry) is the specialty branch that examines the oral-dental health and growth-development dynamics of children starting from infancy and throughout the primary and permanent dentition periods. The medical approach in this age group is carried out with a focus on cooperation, considering the psychological development of the minor patient.\n\nOur clinic includes fluoride varnish and gel applications, fissure sealant procedures that protect occlusal surfaces against caries, primary tooth root canal treatments/amputations, stainless steel crown (SSC) restorations, and space maintainer applications for early tooth losses.\n\nPatient and parent education is the most important building block of pedodontics. Preventive medicine is practiced through the regulation of cariogenic eating habits and modified brushing techniques training. In pediatric cases with severe dental phobia, sedation-supported treatments can be planned when necessary.",
        image: "/s6.webp",
        contentImages: [
            "/s6.webp",
            "/s3.webp"
        ]
    },
    {
        slug: "periodontology",
        title: "Periodontology",
        category: "Gum Treatments",
        shortDesc: "Diagnosis and treatment discipline of supporting tissues (gum and alveolar bone) surrounding the tooth.",
        description: "Periodontology deals with the inflammatory pathologies of the gingiva, periodontal ligament, and alveolar bone tissues surrounding the tooth, and the medical treatment of gingivitis and periodontitis. Periodontal diseases are multifactorial infections that can be seen in every group from adolescence to old age and are one of the major causes of tooth loss.\n\nIn the early phases of treatment, scaling and root planing (curettage) are performed with the help of professional sonic and ultrasonic instruments. In advanced cases with deep periodontal pockets and observed bone resorption, periodontal surgery (flap operations), bone graft applications, and free gingival graft techniques may be indicated following the specialist physician's evaluation.\n\nThe clinical and biochemical relationship of systemic diseases such as diabetes with periodontal tissues is quite high. The stabilization of gingival recession and tooth mobility depends on a versatile oral care routine applied with physician recommendation.",
        image: "/s12.webp",
        contentImages: [
            "/s12.webp",
            "/s10.webp"
        ]
    },
    {
        slug: "prosthodontics",
        title: "Prosthodontics",
        category: "Restorative Treatments",
        shortDesc: "Medical repair of material loss in oral tissues with removable or fixed prostheses.",
        description: "Prosthodontics is the branch where edentulism (toothlessness) cases, tissue, and material losses are restored functionally, anatomically, and phonetically using artificial materials. Temporomandibular joint dysfunctions and orthopedic bite irregularities are addressed with a detailed medical perspective in this discipline.\n\nIn the clinical examination of patients; bone structure, soft tissue tolerance, and vertical dimension loss are evaluated. In complete edentulism, complete denture applications or implant-supported overdenture concepts are presented to the patient, while in partial edentulism, removable prosthesis or fixed crown/bridge restoration types are offered as a result of medical examinations.\n\nIn cases where occlusion (jaw bite) functions incorrectly, occlusal splint (night guard) treatment is also the expertise of this field. By working in coordination with implantology, the principle of integrating mechanics with body biology is targeted.",
        image: "/s13.webp",
        contentImages: [
            "/s13.webp",
            "/s2.webp"
        ]
    },
    {
        slug: "restorative-dentistry",
        title: "Restorative Dentistry",
        category: "Restorative Treatments",
        shortDesc: "Treatment of destruction in hard dental tissues caused by pathological or traumatic reasons.",
        description: "The restorative dentistry branch is the reconstruction process of teeth whose tissue integrity is disrupted due to reasons such as caries, traumatic fracture, attrition (wear), or erosion (chemical loss) at the enamel and dentin level, while the pulp (vascular-nerve) tissue is not affected.\n\nDuring treatment, the main goal is to remove and clean the infected and necrotic hard tissue with clinical instruments such as excavators and burs. The prepared cavity is filled with composite (white), inlay, or onlay (porcelain intermediate layer forms) restoration materials. A minimally invasive approach is adopted considering adhesive dentistry principles.\n\nThe restorations made not only repair the anatomical form but also prevent marginal leakage isolation (microleakage) against the risk of secondary (recurrent) caries formation. In modern filling practices, chemical resistance and stress insulation are taken as a basis.",
        image: "/s14.webp",
        contentImages: [
            "/s14.webp",
            "/s10.webp"
        ]
    }
];
