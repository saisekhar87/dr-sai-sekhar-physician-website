export interface ServiceDetail {
  name: string;
  content: string;
  image?: string;
}

/**
 * Sanitizes and cleans raw HTML content for service detail pages.
 * Strips duplicate main title headers while preserving 100% of rich medical text.
 */
export function cleanServiceContent(html: string, serviceTitle?: string): string {
  if (!html) return "";
  let cleaned = html.trim();

  // Remove duplicate title header if present at beginning
  if (serviceTitle) {
    const escaped = serviceTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const titleRegex = new RegExp(`<h[12][^>]*>\\s*(?:<strong[^>]*>)?\\s*` + escaped + `\\s*(?:<\\/strong>)?\\s*<\\/h[12]>`, 'gi');
    cleaned = cleaned.replace(titleRegex, "");
  }

  return cleaned.trim();
}

export const serviceFallbackMap: Record<string, ServiceDetail> = {
  "type-1-dm": {
    name: "Type 1 Diabetes Mellitus (T1DM)",
    content: `
      <p>Diabetes Type 1, also called <strong>Type 1 Diabetes Mellitus (T1DM)</strong>, is a chronic autoimmune disease where the immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas. This results in little to no insulin production, leading to high blood sugar levels (hyperglycemia).</p>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Autoimmune Reaction:</strong> The body's immune system mistakenly attacks and destroys its own pancreatic beta cells.</li>
        <li><strong>Genetic Predisposition:</strong> Family history of Type 1 Diabetes or autoimmune conditions increases risk.</li>
        <li><strong>Environmental Factors:</strong> Viral infections, dietary triggers, or environmental exposures may initiate the autoimmune cascade.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li><strong>Excessive Thirst (Polydipsia):</strong> Constant unquenchable thirst despite high fluid intake.</li>
        <li><strong>Frequent Urination (Polyuria):</strong> Increased volume and frequency of urination, including night-time waking.</li>
        <li><strong>Extreme Hunger (Polyphagia):</strong> Persistent hunger as body cells cannot utilize glucose without insulin.</li>
        <li><strong>Unintentional Weight Loss:</strong> Rapid weight loss due to muscle and fat breakdown for energy.</li>
        <li><strong>Fatigue and Weakness:</strong> Feeling constantly exhausted and physically weak.</li>
        <li><strong>Blurred Vision:</strong> Fluid shifts in eye lenses caused by elevated blood glucose.</li>
        <li><strong>Slow Healing of Wounds:</strong> Delayed wound healing and increased susceptibility to skin infections.</li>
        <li><strong>Ketoacidosis (Severe Cases):</strong> Nausea, vomiting, abdominal pain, fruity-smelling breath, rapid breathing, and confusion.</li>
      </ul>

      <h3>Diagnosis & Clinical Thresholds</h3>
      <ul>
        <li><strong>Fasting Blood Sugar:</strong> &ge; 126 mg/dL (7.0 mmol/L)</li>
        <li><strong>Random Blood Sugar:</strong> &ge; 200 mg/dL (11.1 mmol/L) accompanied by classic symptoms</li>
        <li><strong>HbA1c Test:</strong> &ge; 6.5% glycated hemoglobin</li>
        <li><strong>C-Peptide Test:</strong> Low or undetectable levels indicate little to no endogenous insulin production.</li>
        <li><strong>Autoantibody Tests:</strong> Detects autoimmune markers such as GAD (Glutamic Acid Decarboxylase) antibodies, IA-2, and ZnT8 antibodies.</li>
      </ul>

      <h3>Treatment & Lifelong Management</h3>
      <ul>
        <li><strong>Lifelong Insulin Therapy:</strong> Basal (long-acting) and bolus (rapid-acting) insulin administered via daily injections or continuous insulin pumps.</li>
        <li><strong>Blood Sugar Monitoring:</strong> Continuous Glucose Monitoring (CGM) or frequent daily fingerstick blood glucose tests.</li>
        <li><strong>Healthy Diet:</strong> Carbohydrate counting, structured balanced meal plans, and low-glycemic index foods.</li>
        <li><strong>Regular Physical Activity:</strong> Exercise helps manage blood sugar, but insulin dosing must be adjusted to prevent hypoglycemia.</li>
        <li><strong>Lifestyle Management:</strong> Avoid smoking, manage psychological stress, and maintain a healthy weight.</li>
      </ul>

      <h3>Complications (If Unmanaged)</h3>
      <ul>
        <li><strong>Short-Term:</strong> Diabetic Ketoacidosis (DKA) – a life-threatening medical emergency requiring immediate ICU care.</li>
        <li><strong>Long-Term:</strong> Peripheral neuropathy, diabetic retinopathy (vision loss), nephropathy (kidney disease), and accelerated cardiovascular disease.</li>
      </ul>
      <p><em>Type 1 diabetes requires lifelong management, but with proper care and medical guidance, individuals can live active, healthy lives.</em></p>
    `
  },

  "type-ii-dm": {
    name: "Type 2 Diabetes Mellitus (T2DM)",
    content: `
      <p><strong>Type 2 Diabetes Mellitus (T2DM)</strong> is a chronic metabolic disorder characterized by insulin resistance and relative insulin deficiency, leading to high blood sugar levels (hyperglycemia). Unlike Type 1 Diabetes, the pancreas still produces insulin, but the body's cells do not respond effectively to it.</p>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Insulin Resistance:</strong> Body cells (muscle, fat, liver) do not respond effectively to insulin.</li>
        <li><strong>Genetics & Family History:</strong> Strong genetic component; family history significantly elevates risk.</li>
        <li><strong>Obesity & Sedentary Lifestyle:</strong> Excess body fat (especially visceral belly fat) and lack of physical activity.</li>
        <li><strong>Unhealthy Diet:</strong> Diets high in refined carbohydrates, sugary beverages, and processed foods.</li>
        <li><strong>Age:</strong> More common in individuals over 45, though increasingly diagnosed in younger adults and teenagers.</li>
        <li><strong>Hypertension & High Cholesterol:</strong> High blood pressure and abnormal lipid profiles increase metabolic risk.</li>
        <li><strong>Gestational Diabetes History:</strong> Prior history of elevated blood sugar during pregnancy.</li>
        <li><strong>Polycystic Ovary Syndrome (PCOS):</strong> Hormonal imbalance associated with elevated insulin resistance.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Increased thirst (polydipsia) & frequent urination (polyuria)</li>
        <li>Increased hunger (polyphagia) & chronic fatigue</li>
        <li>Blurred vision & slow-healing cuts or sores</li>
        <li>Numbness or tingling in hands and feet (peripheral nerve involvement)</li>
        <li>Frequent infections (e.g., skin, gum, or urinary tract infections)</li>
      </ul>

      <h3>Diagnostic Criteria</h3>
      <ul>
        <li><strong>Fasting Blood Sugar:</strong> &ge; 126 mg/dL (7.0 mmol/L)</li>
        <li><strong>Random Blood Sugar:</strong> &ge; 200 mg/dL (11.1 mmol/L)</li>
        <li><strong>HbA1c (Glycated Hemoglobin):</strong> &ge; 6.5%</li>
        <li><strong>Oral Glucose Tolerance Test (OGTT):</strong> &ge; 200 mg/dL after 2 hours</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <h4>1. Lifestyle Changes (First-Line Treatment)</h4>
      <ul>
        <li><strong>Healthy Diet:</strong> Low-carb, high-fiber diet rich in vegetables, legumes, and lean proteins.</li>
        <li><strong>Regular Exercise:</strong> At least 150 minutes per week of moderate aerobic exercise (brisk walking, cycling) and strength training.</li>
        <li><strong>Weight Loss:</strong> Losing even 5–10% of body weight significantly improves insulin sensitivity and blood sugar control.</li>
        <li><strong>Smoking Cessation & Alcohol Limitation:</strong> Protects cardiovascular and microvascular health.</li>
      </ul>

      <h4>2. Medications (When Lifestyle Modifications Are Insufficient)</h4>
      <ul>
        <li><strong>Metformin:</strong> First-line oral drug; decreases hepatic glucose production and improves insulin sensitivity.</li>
        <li><strong>SGLT2 Inhibitors (e.g., Empagliflozin):</strong> Promotes urinary excretion of excess glucose and provides renal/cardiac protection.</li>
        <li><strong>GLP-1 Agonists (e.g., Liraglutide):</strong> Slows gastric emptying, enhances insulin secretion, and aids weight loss.</li>
        <li><strong>Sulfonylureas (e.g., Glimepiride):</strong> Stimulates pancreatic beta cells to produce more insulin.</li>
        <li><strong>Insulin Therapy:</strong> Indicated for severe or advanced disease progression.</li>
      </ul>

      <h3>Complications (If Unmanaged)</h3>
      <ul>
        <li><strong>Cardiovascular Disease:</strong> Elevated risk of heart attacks, stroke, and peripheral artery disease.</li>
        <li><strong>Diabetic Neuropathy:</strong> Nerve damage causing numbness, tingling, and chronic limb pain.</li>
        <li><strong>Diabetic Retinopathy:</strong> Microvascular eye damage, potential vision loss and blindness.</li>
        <li><strong>Diabetic Nephropathy:</strong> Progressive renal microvascular damage leading to kidney failure.</li>
        <li><strong>Diabetic Foot Ulcers:</strong> Impaired healing and circulation leading to non-healing wounds and amputation risk.</li>
        <li><strong>Cognitive Decline:</strong> Increased risk of dementia and Alzheimer's disease.</li>
      </ul>

      <h3>Prevention & Reversal</h3>
      <p>Healthy diet, portion control, regular exercise, and maintaining an optimal BMI are key. Early intervention in prediabetes can reverse blood sugar elevation and prevent conversion to full T2DM!</p>
    `
  },

  "diabetic-neuropathy": {
    name: "Diabetic Neuropathy",
    content: `
      <p><strong>Diabetic Neuropathy</strong> is a form of nerve damage caused by prolonged high blood sugar levels (hyperglycemia) in individuals with diabetes (both Type 1 and Type 2). It most commonly damages nerves in the legs and feet, but can affect autonomic, proximal, and cranial nerves.</p>

      <h3>Types of Diabetic Neuropathy</h3>
      <ul>
        <li><strong>1. Peripheral Neuropathy (Most Common):</strong> Affects nerves in hands, legs, and feet.<br />
            <em>Symptoms:</em> Tingling, burning sensations, numbness, sharp pains or cramps, loss of temperature/pain sensation (risk of unnoticed injury), hypersensitivity to light touch, and muscle weakness.
        </li>
        <li><strong>2. Autonomic Neuropathy:</strong> Affects the autonomic nervous system controlling involuntary internal organs.<br />
            <em>Symptoms:</em> Postural dizziness or fainting (orthostatic hypotension), gastroparesis (slow stomach emptying, bloating, nausea), bladder dysfunction (urinary retention or incontinence), erectile dysfunction in men, vaginal dryness in women, and abnormal sweating.
        </li>
        <li><strong>3. Proximal Neuropathy (Diabetic Amyotrophy):</strong> Affects nerves in hips, thighs, buttocks, and legs.<br />
            <em>Symptoms:</em> Severe unilateral pain in hips/thighs, leg muscle weakness (difficulty standing up from a chair), and progressive muscle atrophy.
        </li>
        <li><strong>4. Focal Neuropathy (Mononeuropathy):</strong> Affects a specific single nerve, often in the head, torso, or leg.<br />
            <em>Symptoms:</em> Sudden localized pain/weakness, double vision or eye pain (cranial nerve III/VI involvement), carpal tunnel syndrome (median nerve compression in hand).
        </li>
      </ul>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>High Blood Sugar (Hyperglycemia):</strong> Chronically elevated glucose damages microvascular capillaries supplying nerves.</li>
        <li><strong>High Blood Pressure & High Cholesterol:</strong> Reduces nerve blood flow and accelerates microvascular injury.</li>
        <li><strong>Smoking & Alcohol Abuse:</strong> Impairs arterial circulation and exerts direct neurotoxic effects.</li>
        <li><strong>Obesity & Inactivity:</strong> Increases inflammatory markers and metabolic stress.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Physical Examination:</strong> Assessing tendon reflexes, muscle strength, and vibration sensitivity (tuning fork).</li>
        <li><strong>10-gram Monofilament Test:</strong> Evaluates protective touch sensation in feet to identify foot ulcer risk.</li>
        <li><strong>Nerve Conduction Studies (NCS):</strong> Measures the speed and strength of electrical signals passing through nerves.</li>
        <li><strong>Electromyography (EMG):</strong> Evaluates electrical discharge in muscles to pinpoint nerve root damage.</li>
        <li><strong>Autonomic Testing:</strong> Heart rate variability (HRV) analysis, tilt-table test, and sweat response evaluation.</li>
      </ul>

      <h3>Treatment & Clinical Management</h3>
      <ul>
        <li><strong>Glycemic Control:</strong> Maintaining strict, consistent blood sugar levels to prevent further nerve destruction.</li>
        <li><strong>Nerve Pain Relief Medications:</strong>
          <ul>
            <li><em>Pregabalin (Lyrica) & Gabapentin (Neurontin):</em> Neuropathic calcium channel alpha-2-delta ligands for pain relief.</li>
            <li><em>Duloxetine (Cymbalta):</em> Serotonin-norepinephrine reuptake inhibitor (SNRI) effective for neuropathic pain.</li>
            <li><em>Topical Capsaicin Cream & Lidocaine Patches:</em> Localized cutaneous pain relief.</li>
          </ul>
        </li>
        <li><strong>Physical Therapy:</strong> Balance training, physical exercises, and muscle strengthening to reduce fall risks.</li>
        <li><strong>Diabetic Foot Care:</strong> Daily visual inspection, wearing protective footwear, and routine podiatric check-ups.</li>
      </ul>

      <h3>Complications (If Untreated)</h3>
      <ul>
        <li><strong>Foot Ulcers & Infections:</strong> Unnoticed cuts leading to severe infection, gangrene, and lower limb amputation.</li>
        <li><strong>Loss of Balance & Falls:</strong> Impaired proprioception causing gait instability.</li>
        <li><strong>Silent Heart Attacks:</strong> Damaged cardiac autonomic nerves masking ischemic chest pain.</li>
        <li><strong>Severe Gastrointestinal Dysfunction:</strong> Gastroparesis causing persistent vomiting and severe malnutrition.</li>
      </ul>

      <h3>Prevention Checklist</h3>
      <p>Strict blood sugar control, regular physical exercise, tobacco/alcohol avoidance, B-vitamin rich diet, and daily foot inspections are vital for neurological preservation.</p>
    `
  },

  "diabetic-nephropathy": {
    name: "Diabetic Nephropathy",
    content: `
      <p><strong>Diabetic Nephropathy (Diabetic Kidney Disease)</strong> is a progressive microvascular kidney complication caused by long-standing high blood sugar levels in diabetes. It damages the tiny filtering units of the kidneys (glomeruli), leading to protein leaking into urine (proteinuria/albuminuria) and gradual kidney failure.</p>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Chronic Hyperglycemia:</strong> High blood sugar damages renal blood vessels and glomerular filtration barriers.</li>
        <li><strong>Uncontrolled Hypertension:</strong> Elevated systemic blood pressure increases intra-glomerular pressure and strain.</li>
        <li><strong>Dyslipidemia:</strong> Elevated cholesterol accelerates vascular sclerosis in renal tissue.</li>
        <li><strong>Genetics & Family History:</strong> Family history of kidney disease or hypertension.</li>
        <li><strong>Smoking & Excessive Alcohol:</strong> Accelerates renal function decline.</li>
        <li><strong>Obesity & Sedentary Lifestyle:</strong> Increases metabolic hyperfiltration load on kidneys.</li>
      </ul>

      <h3>Symptoms Across Stages</h3>
      <ul>
        <li><strong>Early Stages:</strong> Usually asymptomatic ("silent progression"). Microalbuminuria detectable only via lab tests.</li>
        <li><strong>Later Stages:</strong> Foamy or frothy urine (due to heavy protein leakage), swelling (edema) in feet, ankles, hands, and eyes; frequent nighttime urination (nocturia), persistent fatigue, nausea/vomiting, loss of appetite, shortness of breath (fluid in lungs), and worsening hypertension.</li>
      </ul>

      <h3>Stages of Diabetic Nephropathy</h3>
      <div style="overflow-x: auto; margin: 16px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: var(--primary-light, #f0fdf4); border-bottom: 2px solid var(--primary);">
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Stage</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">eGFR (Kidney Function)</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Clinical Symptoms & Characteristics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 1</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&gt; 90 mL/min</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Normal or high eGFR, hyperfiltration, microalbuminuria may begin.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 2</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">60–89 mL/min</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Mild kidney damage, persistent protein in urine, asymptomatic.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 3</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">30–59 mL/min</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Moderate kidney damage, mild swelling, rising BP, fatigue.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 4</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">15–29 mL/min</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Severe kidney damage, pronounced edema, anemia, nausea.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 5</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&lt; 15 mL/min</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">End-Stage Kidney Disease (ESKD); dialysis or transplant required.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Diagnostic Workup</h3>
      <ul>
        <li><strong>Urine Albumin-to-Creatinine Ratio (UACR):</strong> Detects microalbuminuria (&gt; 30 mg/g).</li>
        <li><strong>Serum Creatinine & eGFR Blood Test:</strong> Calculates precise filtration capacity.</li>
        <li><strong>Blood Pressure Monitoring:</strong> High BP accelerates glomerulosclerosis.</li>
        <li><strong>Renal Ultrasound / Biopsy:</strong> Rules out non-diabetic kidney pathologies if atypical presentation occurs.</li>
      </ul>

      <h3>Treatment & Prevention Strategy</h3>
      <ul>
        <li><strong>Glycemic Control:</strong> Maintain target HbA1c &lt; 7.0%.</li>
        <li><strong>Renoprotective Blood Pressure Medications:</strong> ACE Inhibitors (e.g., Lisinopril) or ARBs (e.g., Losartan) reduce intra-glomerular pressure and reduce proteinuria.</li>
        <li><strong>SGLT2 Inhibitor Therapy:</strong> Significantly slows CKD progression in diabetic patients.</li>
        <li><strong>Dietary Adjustments:</strong> Low-protein diet (reduces renal workload), low-sodium intake (&lt; 2g/day) to control edema and BP.</li>
        <li><strong>Avoid Nephrotoxic Drugs:</strong> Avoid NSAIDs (such as Ibuprofen, Naproxen) and iodinated radiocontrast agents.</li>
        <li><strong>Statin Lipid Control & Smoking Cessation:</strong> Protects systemic vascular health.</li>
      </ul>
    `
  },

  "hypothyroidism": {
    name: "Hypothyroidism (Underactive Thyroid)",
    content: `
      <p><strong>Hypothyroidism</strong> is a medical condition in which the thyroid gland produces insufficient quantities of essential thyroid hormones—Triiodothyronine (T3) and Thyroxine (T4)—leading to a generalized slowing of body metabolism. It is more common in women and can range from mild subclinical cases to severe myxedema.</p>

      <h3>Causes of Hypothyroidism</h3>
      <ul>
        <li><strong>Hashimoto’s Thyroiditis (Autoimmune Disease):</strong> Most common cause; the body's immune system produces autoantibodies (anti-TPO) that destroy thyroid tissue.</li>
        <li><strong>Iodine Deficiency:</strong> Dietary lack of iodine, which is essential for thyroid hormone synthesis.</li>
        <li><strong>Post-Thyroid Surgery or Radiation Therapy:</strong> Partial/total thyroidectomy or radioactive iodine treatment for hyperthyroidism/thyroid cancer.</li>
        <li><strong>Congenital Hypothyroidism:</strong> Infants born with an underdeveloped or absent thyroid gland.</li>
        <li><strong>Pituitary Gland Dysfunction:</strong> Secondary hypothyroidism caused by inadequate TSH secretion from the pituitary gland.</li>
        <li><strong>Medication-Induced:</strong> Drugs such as Lithium, Amiodarone, and interferon-alpha interfering with thyroid function.</li>
      </ul>

      <h3>Symptoms of Hypothyroidism</h3>
      <ul>
        <li><strong>General Physical Symptoms:</strong> Chronic fatigue, muscle weakness, unexplained weight gain (despite normal eating), cold intolerance (feeling cold when others are comfortable), dry rough skin, brittle hair & nails, puffy face, swollen hands/feet (myxedema).</li>
        <li><strong>Mental & Cognitive Symptoms:</strong> Depression, mood swings, difficulty concentrating ("brain fog"), memory impairment, slow speech.</li>
        <li><strong>Metabolic & Digestive Symptoms:</strong> Constipation, slow heart rate (bradycardia), hoarse voice, high cholesterol.</li>
        <li><strong>Reproductive Symptoms:</strong> Irregular or heavy menstrual bleeding (menorrhagia), infertility, increased miscarriage risk.</li>
        <li><strong>Severe Cases (Myxedema Crisis – Life-Threatening):</strong> Extreme hypothermia, severe bradycardia, hypoventilation, confusion, or myxedema coma (requires immediate emergency ICU care).</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Serum TSH (Thyroid-Stimulating Hormone):</strong> Elevated TSH is the primary sensitive marker for primary hypothyroidism.</li>
        <li><strong>Free T4 (Thyroxine):</strong> Low Free T4 levels confirm overt hypothyroidism.</li>
        <li><strong>Thyroid Autoantibodies (Anti-TPO, TgAb):</strong> High titers confirm Hashimoto's Thyroiditis.</li>
        <li><strong>Thyroid Ultrasound:</strong> Evaluates goiter, thyroid nodules, or parenchymal echotexture.</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <h4>1. Daily Hormone Replacement Therapy</h4>
      <ul>
        <li><strong>Levothyroxine (Synthroid, Eltroxin):</strong> Synthetic T4 hormone taken daily on an empty stomach with water (30–60 minutes before breakfast).</li>
        <li><strong>Dose Titration:</strong> Blood TSH levels rechecked every 6–8 weeks until optimal dosage is established.</li>
      </ul>

      <h4>2. Dietary & Lifestyle Guidance</h4>
      <ul>
        <li><strong>Nutritional Support:</strong> Ensure adequate iodine, selenium, and zinc intake (nuts, seeds, seafood, eggs).</li>
        <li><strong>Avoid Absorption Interferences:</strong> Do not take calcium, iron supplements, antacids, or soy products within 4 hours of levothyroxine. Avoid excessive raw goitrogenic vegetables (raw cabbage, broccoli).</li>
        <li><strong>Regular Exercise:</strong> Helps combat weight gain, constipation, and muscle lethargy.</li>
      </ul>

      <h3>Complications (If Untreated)</h3>
      <ul>
        <li><strong>Goiter:</strong> Thyroid enlargement causing swallowing or breathing discomfort.</li>
        <li><strong>Cardiovascular Disease:</strong> Elevated LDL cholesterol, pericardial effusion, and heart failure.</li>
        <li><strong>Infertility & Developmental Delay:</strong> Maternal hypothyroidism can cause congenital birth defects or cognitive impairments in infants.</li>
        <li><strong>Myxedema Coma:</strong> Fatal end-stage hypothyroid emergency.</li>
      </ul>
    `
  },

  "hyperthyroidism": {
    name: "Hyperthyroidism (Overactive Thyroid)",
    content: `
      <p><strong>Hyperthyroidism</strong> is a condition in which the thyroid gland produces an excess of thyroid hormones (T3 and T4), leading to a hypermetabolic state. It causes rapid weight loss, elevated heart rate, anxiety, tremors, and heat intolerance.</p>

      <h3>Causes of Hyperthyroidism</h3>
      <ul>
        <li><strong>Graves' Disease (Most Common):</strong> Autoimmune disorder where Thyroid-Stimulating Immunoglobulins (TSI) bind to and overstimulate TSH receptors.</li>
        <li><strong>Toxic Multinodular Goiter (Plummer’s Disease):</strong> Thyroid nodules independently hypersecreting T3/T4.</li>
        <li><strong>Thyroiditis (Thyroid Inflammation):</strong> Viral infection or postpartum inflammation releasing stored thyroid hormones into blood.</li>
        <li><strong>Excessive Iodine Intake:</strong> High iodine exposure from amiodarone, contrast agents, or kelp supplements (Jod-Basedow phenomenon).</li>
        <li><strong>Levothyroxine Overdose:</strong> Excessive exogenous thyroid hormone replacement therapy.</li>
      </ul>

      <h3>Symptoms of Hyperthyroidism</h3>
      <ul>
        <li><strong>Metabolic Symptoms:</strong> Unintentional rapid weight loss despite increased appetite, excessive sweating, heat intolerance, warm moist skin.</li>
        <li><strong>Cardiovascular & Nervous Symptoms:</strong> Tachycardia (fast heart rate &gt; 100 bpm), palpitations, atrial fibrillation, tremors (fine hand shaking), anxiety, irritability, severe insomnia.</li>
        <li><strong>Digestive Symptoms:</strong> Frequent bowel movements or persistent diarrhea.</li>
        <li><strong>Eye & Skin Symptoms (Graves' Specific):</strong> Exophthalmos (bulging eyes), eye grittiness, double vision, pretibial myxedema (swollen red shins).</li>
        <li><strong>Reproductive Symptoms:</strong> Light or irregular menstrual cycles, reduced fertility in women, gynecomastia in men.</li>
        <li><strong>Severe Complication (Thyroid Storm):</strong> Life-threatening crisis marked by high fever (&gt; 104°F), severe tachycardia, agitation, delirium, and heart failure.</li>
      </ul>

      <h3>Diagnostic Workup</h3>
      <ul>
        <li><strong>Serum TSH Test:</strong> Suppressed/low TSH (&lt; 0.1 mIU/L).</li>
        <li><strong>Free T4 & Free T3 Blood Tests:</strong> Significantly elevated hormone levels.</li>
        <li><strong>Thyroid Autoantibody Tests:</strong> TSH Receptor Antibodies (TRAb) / TSI positive in Graves' disease.</li>
        <li><strong>Radioactive Iodine Uptake (RAIU) Test:</strong> Differentiates Graves' (diffuse high uptake) from thyroiditis (low uptake) or toxic nodules (nodular uptake).</li>
        <li><strong>Thyroid Ultrasound:</strong> Visualizes nodules, goiter vascularity, and tissue architecture.</li>
      </ul>

      <h3>Treatment Modalities</h3>
      <ul>
        <li><strong>1. Antithyroid Medications:</strong> Methimazole (MMI) or Propylthiouracil (PTU) block thyroid hormone synthesis.</li>
        <li><strong>2. Beta-Blockers (e.g., Propranolol, Atenolol):</strong> Rapidly alleviates heart palpitations, tremors, hypertension, and anxiety.</li>
        <li><strong>3. Radioactive Iodine (RAI-131) Therapy:</strong> Ablative treatment destroying hyperactive thyroid follicular cells.</li>
        <li><strong>4. Surgical Thyroidectomy:</strong> Partial or total thyroidectomy indicated for large goiters, malignancy, or medication intolerance.</li>
      </ul>

      <h3>Complications & Prevention</h3>
      <p>Untreated hyperthyroidism causes cardiac arrhythmias, heart failure, osteoporosis (rapid bone loss), and thyroid storm. Regular monitoring, stress control, and avoiding excess iodine supplements are critical.</p>
    `
  },

  "dengue-fever": {
    name: "Dengue Fever Management",
    content: `
      <p><strong>Dengue Fever</strong> is an acute mosquito-borne viral infection caused by the dengue virus (DENV, serotypes DENV-1, DENV-2, DENV-3, and DENV-4). It is transmitted to humans through the bite of infected female <em>Aedes aegypti</em> and <em>Aedes albopictus</em> mosquitoes.</p>

      <h3>Symptoms of Dengue Fever (Appear 4–10 Days Post-Bite)</h3>
      <ul>
        <li><strong>High Sudden Fever:</strong> High fever spiking up to 104°F (40°C).</li>
        <li><strong>Retro-Orbital Pain:</strong> Severe aching pain behind the eyes.</li>
        <li><strong>Breakbone Body Aches:</strong> Intense muscle, joint, and bone pain.</li>
        <li><strong>Headache & Fatigue:</strong> Severe frontal headache and prostration.</li>
        <li><strong>Gastrointestinal Symptoms:</strong> Persistent nausea, vomiting, loss of appetite.</li>
        <li><strong>Dengue Rash:</strong> Measles-like maculopapular rash appearing 2–5 days after fever onset.</li>
        <li><strong>Mild Bleeding Manifestations:</strong> Epistaxis (nosebleeds), bleeding gums, or petechial skin spots.</li>
      </ul>

      <h3>Severe Dengue (DHF / DSS – Life-Threatening Warning Signs)</h3>
      <p>Severe Dengue (Dengue Hemorrhagic Fever / Dengue Shock Syndrome) occurs when fever drops (critical phase, days 3–7). Immediate emergency hospitalization is mandatory if any warning sign appears:</p>
      <ul>
        <li>Severe, unremitting abdominal pain</li>
        <li>Persistent, intractable vomiting</li>
        <li>Mucosal bleeding (spontaneous bleeding from nose/gums/gastrointestinal tract)</li>
        <li>Rapid breathing (tachypnea) & fluid accumulation (pleural effusion/ascites)</li>
        <li>Severe fatigue, restlessness, or altered mental state</li>
        <li>Rapid drop in blood platelet count (&lt; 50,000/µL) with rising hematocrit (plasma leakage).</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>NS1 Antigen Test:</strong> Positive during early acute fever phase (days 1–5).</li>
        <li><strong>Dengue IgM & IgG Antibody Test:</strong> Detects seroconversion in later acute/convalescent phase.</li>
        <li><strong>Complete Blood Count (CBC):</strong> Daily monitoring of platelet count, white blood cells, and hematocrit levels.</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <ul>
        <li><strong>Hydration Therapy:</strong> Aggressive oral fluid intake (ORS, coconut water, fresh juices) or intravenous isotonic fluids for plasma leakage.</li>
        <li><strong>Fever & Pain Management:</strong> Paracetamol (Acetaminophen) for fever relief.<br />
            <strong style="color: #dc2626;">⚠️ CRITICAL CONTRAINDICATION: Avoid NSAIDs (Ibuprofen, Aspirin, Naproxen) as they worsen bleeding and precipitate severe hemorrhage!</strong>
        </li>
        <li><strong>Hospitalization & Platelet Monitoring:</strong> Inpatient monitoring for severe thrombocytopenia or hemodynamic instability.</li>
      </ul>

      <h3>Prevention</h3>
      <p>Eliminate stagnant water breeding sites around homes, wear long clothing, apply mosquito repellents (DEET), and use mosquito nets. Dengvaxia vaccine is available for individuals with confirmed previous dengue infection.</p>
    `
  },

  "malaria": {
    name: "Malaria Diagnosis & Treatment",
    content: `
      <p><strong>Malaria</strong> is a life-threatening protozoal vector-borne infection caused by <em>Plasmodium</em> parasites. It is transmitted to humans through the bites of infected female <em>Anopheles</em> mosquitoes. Once injected, parasites infect liver cells and red blood cells (erythrocytes).</p>

      <h3>Plasmodium Parasite Species</h3>
      <ul>
        <li><strong>Plasmodium falciparum:</strong> The most dangerous species; responsible for severe, fatal complications, cerebral malaria, and organ failure.</li>
        <li><strong>Plasmodium vivax:</strong> Common cause of malaria; forms dormant liver hypnozoites causing recurrent relapses.</li>
        <li><strong>Plasmodium ovale:</strong> Causes relapsing tertian malaria via liver hypnozoites.</li>
        <li><strong>Plasmodium malariae:</strong> Causes quartan fever cycles and chronic low-grade nephrotic syndrome.</li>
        <li><strong>Plasmodium knowlesi:</strong> Zoonotic primate malaria found in Southeast Asia, causing severe rapid parasitemia.</li>
      </ul>

      <h3>Symptoms (Appears 10–15 Days Post-Bite)</h3>
      <ul>
        <li><strong>Paroxysmal Cyclical Fevers:</strong> High fevers occurring every 48 hours (vivax/falciparum) or 72 hours (malariae).</li>
        <li><strong>Rigors & Sweating:</strong> Severe cold shivering chills followed by high fever spikes and drenching sweats.</li>
        <li><strong>Systemic Symptoms:</strong> Intense headache, muscle (myalgia) & joint pain, persistent nausea, vomiting, fatigue, and jaundice (yellow skin/eyes from hemolysis).</li>
      </ul>

      <h3>Severe Malaria Complications (Medical Emergency)</h3>
      <ul>
        <li><strong>Cerebral Malaria:</strong> Parasitized RBC sequestration in brain capillaries causing altered consciousness, seizures, and coma.</li>
        <li><strong>Severe Anemia:</strong> Massive erythrocyte destruction by parasites.</li>
        <li><strong>Acute Kidney Injury & Blackwater Fever:</strong> Hemoglobinuria (dark red urine) and renal failure.</li>
        <li><strong>Acute Respiratory Distress Syndrome (ARDS):</strong> Fluid accumulation in lungs.</li>
        <li><strong>Septic Shock & Multiorgan Failure:</strong> Profound hypotension and lactic acidosis.</li>
      </ul>

      <h3>Diagnostic Testing</h3>
      <ul>
        <li><strong>Giemsa-Stained Peripheral Blood Smear Microscopy:</strong> Gold standard; thick smear for parasite detection, thin smear for species identification.</li>
        <li><strong>Rapid Diagnostic Tests (RDTs):</strong> Antigen-based tests detecting PfHRP2 or Plasmodium LDH.</li>
        <li><strong>Polymerase Chain Reaction (PCR):</strong> Highly sensitive molecular confirmation for low parasitemia.</li>
      </ul>

      <h3>Treatment Guidelines</h3>
      <ul>
        <li><strong>Uncomplicated Malaria:</strong> Artemisinin-based Combination Therapies (ACTs such as Artemether-Lumefantrine or Artesunate-Amodiaquine). Chloroquine for sensitive <em>P. vivax/ovale</em> plus Primaquine/Tafenoquine for liver hypnozoite radical cure.</li>
        <li><strong>Severe Malaria:</strong> Immediate IV Artesunate (or IV Quinine) administered in ICU, followed by full oral ACT course and supportive blood transfusions/dialysis.</li>
      </ul>

      <h3>Prevention Strategies</h3>
      <ul>
        <li><strong>Mosquito Control:</strong> Insecticide-Treated Nets (ITNs), indoor residual spraying, and eliminating stagnant water breeding sites.</li>
        <li><strong>Chemoprophylaxis for Travelers:</strong> Doxycycline, Mefloquine, or Atovaquone-Proguanil taken before entering endemic areas.</li>
        <li><strong>Malaria Vaccines:</strong> RTS,S/AS01 (Mosquirix) and R21/Matrix-M vaccines approved for pediatric prevention in endemic zones.</li>
      </ul>
    `
  },

  "urinary-tract-infection-uti": {
    name: "Urinary Tract Infection (UTI)",
    content: `
      <p>A <strong>Urinary Tract Infection (UTI)</strong> is an infection affecting any portion of the urinary tract system, including the urethra (urethritis), bladder (cystitis), or kidneys (pyelonephritis). UTIs are most commonly caused by uropathogenic <em>Escherichia coli (E. coli)</em> bacteria entering the urethra.</p>

      <h3>Common Symptoms</h3>
      <ul>
        <li><strong>Dysuria:</strong> Painful, sharp burning sensation during urination.</li>
        <li><strong>Pollakiuria & Urgency:</strong> Frequent, sudden, uncontrollable urge to urinate, often producing small amounts.</li>
        <li><strong>Cloudy & Malodorous Urine:</strong> Turbid, cloudy, or foul-smelling urine; may contain visible blood (hematuria).</li>
        <li><strong>Suprapubic & Pelvic Pain:</strong> Pressure or dull aching in lower abdomen and pelvis.</li>
        <li><strong>Upper UTI / Pyelonephritis Signs:</strong> High fever, shaking chills, flank/back pain, nausea, and vomiting (indicates kidney involvement requiring prompt medical care).</li>
      </ul>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li>Bacterial ascension into urethra (predominantly <em>E. coli</em> from intestinal tract).</li>
        <li>Female anatomy (shorter urethral length).</li>
        <li>Poor hygiene practices or improper wiping.</li>
        <li>Voluntary urinary retention ("holding urine" for long periods).</li>
        <li>Inadequate fluid intake and dehydration.</li>
        <li>Sexual activity or use of diaphragms/spermicides.</li>
        <li>Urinary tract obstructions (kidney stones, enlarged prostate).</li>
      </ul>

      <h3>Diagnosis & Clinical Evaluation</h3>
      <ul>
        <li><strong>Urinalysis (Dipstick & Microscopy):</strong> Checks for leukocyte esterase, nitrites, WBCs, and RBCs.</li>
        <li><strong>Urine Culture & Sensitivity (C&S):</strong> Identifies exact bacterial strain and antibiotic susceptibility.</li>
        <li><strong>Renal Ultrasound or CT scan:</strong> Performed for recurrent UTIs or suspected pyelonephritis/stones.</li>
      </ul>

      <h3>Treatment & Prevention Protocol</h3>
      <ul>
        <li><strong>Targeted Prescription Antibiotics:</strong> Nitrofurantoin, Trimethoprim-Sulfamethoxazole, or Fosfomycin for lower UTIs; Fluoroquinolones or Ceftriaxone for pyelonephritis.</li>
        <li><strong>High Fluid Hydration:</strong> Drinking 2.5–3 liters of water daily to flush bacteria from the urinary tract.</li>
        <li><strong>Urinary Analgesics:</strong> Phenazopyridine for rapid symptomatic relief of severe burning.</li>
        <li><strong>Preventative Habits:</strong> Urinate immediately after intercourse, wipe from front to back, avoid holding urine, limit caffeine and alcohol bladder irritants, and consider cranberry extract supplements.</li>
      </ul>
    `
  },

  "viral-bacterial-infection": {
    name: "Viral vs. Bacterial Infections",
    content: `
      <p>Both <strong>viral and bacterial infections</strong> cause acute infectious illnesses with overlapping clinical features like fever and fatigue. However, viruses and bacteria are fundamentally different microorganisms requiring completely different medical treatments.</p>

      <h3>Comparative Overview</h3>
      <div style="overflow-x: auto; margin: 16px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: var(--primary-light, #f0fdf4); border-bottom: 2px solid var(--primary);">
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Clinical Feature</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Viral Infection 🦠</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Bacterial Infection 🧫</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Causative Agent</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Submicroscopic genetic code (DNA/RNA) requiring host cells to replicate.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Single-celled independent living prokaryotic organisms.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Common Examples</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Common Cold, Influenza (Flu), COVID-19, Measles, Chickenpox, Viral Gastroenteritis.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Strep Throat, Urinary Tract Infection (UTI), Bacterial Pneumonia, Tuberculosis.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Onset & Duration</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Gradual onset, widespread systemic symptoms lasting 5–10 days.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Sudden onset, localized intense pain/swelling, progressive without treatment.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Fever Response</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Low-grade to moderate fever, clear nasal discharge.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">High spike fever with severe chills and purulent yellow/green mucus.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Do Antibiotics Work?</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong style="color: #dc2626;">❌ NO</strong> (Ineffective against viruses)</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong style="color: #16a34a;">✅ YES</strong> (Kills or inhibits bacteria)</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Medical Treatment</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Rest, oral rehydration, symptom relief, specific antivirals if indicated.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Targeted doctor-prescribed antibiotic regimen.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Clinical Symptoms Breakdown</h3>
      <ul>
        <li><strong>Viral Infection Symptoms:</strong> Clear runny nose, mild sore throat, dry cough, low-grade fever, diffuse body aches, watery diarrhea, fatigue.</li>
        <li><strong>Bacterial Infection Symptoms:</strong> High fever with rigors, localized intense pain/redness/swelling, thick purulent yellow/green exudate, pus formation on tonsils, symptoms worsening after temporary improvement.</li>
      </ul>

      <h3>When to Seek Medical Evaluation</h3>
      <ul>
        <li>Symptoms lasting more than 7–10 days or rapidly worsening.</li>
        <li>High fever (&gt; 102°F / 39°C) unresponsive to paracetamol.</li>
        <li>Shortness of breath, chest pain, or severe difficulty swallowing.</li>
        <li>Stiff neck, severe headache, confusion, or lethargy.</li>
      </ul>
      <p><em>⚠️ Critical Medical Note: Taking antibiotics for viral infections does not cure the illness and promotes dangerous antimicrobial resistance! Always consult Dr. Sai Sekhar P for accurate diagnostic evaluation.</em></p>
    `
  },

  "acute-gastroenteritis": {
    name: "Acute Gastroenteritis",
    content: `
      <p><strong>Acute Gastroenteritis</strong> ("stomach flu") is a sudden inflammation of the mucosal lining of the stomach and intestines. It leads to rapid onset diarrhea, vomiting, abdominal cramping, and dehydration.</p>

      <h3>Causes of Acute Gastroenteritis</h3>
      <ul>
        <li><strong>Viral Infections (Most Common):</strong> Norovirus (leading cause in adults), Rotavirus (common in children), Adenovirus, Astrovirus.</li>
        <li><strong>Bacterial Infections (Food Poisoning):</strong> <em>Salmonella, Escherichia coli (E. coli), Campylobacter jejuni, Shigella, Staphylococcus aureus</em> enterotoxins.</li>
        <li><strong>Parasitic Infections:</strong> <em>Giardia lamblia, Cryptosporidium</em>.</li>
        <li><strong>Transmission:</strong> Contaminated food or water, unhygienic food handling, or direct contact with infected individuals.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Sudden watery, loose diarrhea (multiple episodes daily)</li>
        <li>Persistent nausea and forceful vomiting</li>
        <li>Diffused abdominal cramps and colicky pain</li>
        <li>Low-grade fever, chills, and headache</li>
        <li>Dehydration signs: dry mouth, sunken eyes, extreme thirst, dizziness, little or dark urine.</li>
      </ul>

      <h3>Treatment & Clinical Management</h3>
      <ul>
        <li><strong>1. Aggressive Hydration (First Priority):</strong> Oral Rehydration Salts (ORS) solution, electrolyte drinks, clear broths. Avoid alcohol, caffeine, and sugary sodas.</li>
        <li><strong>2. Dietary Protocol (BRAT Diet):</strong> Transition to bland food—Bananas, Rice, Applesauce, Toast. Avoid dairy, high-fat, fried, and heavily spiced foods.</li>
        <li><strong>3. Pharmacotherapy:</strong>
          <ul>
            <li><em>Antidiarrheal Agents (Loperamide / Imodium):</em> Controls frequency; avoid in invasive bacterial gastroenteritis with high fever/bloody stool.</li>
            <li><em>Targeted Antibiotics:</em> Prescribed only for confirmed bacterial or parasitic enteritis.</li>
            <li><em>Probiotics (Lactobacillus / Saccharomyces boulardii):</em> Helps restore healthy gut microbiome flora.</li>
          </ul>
        </li>
      </ul>

      <h3>Red Flag Symptoms (Seek Emergency Care)</h3>
      <p>Seek immediate medical assistance if diarrhea/vomiting persists &gt; 3 days, high fever (&gt; 102°F), signs of severe dehydration, or visible blood/mucus in stool or vomit.</p>
    `
  },

  "tension-headache": {
    name: "Tension Headache",
    content: `
      <p>A <strong>Tension Headache</strong> is the most common type of primary headache disorder. It is characterized by a dull, aching pressure or tight band-like sensation around the forehead, temples, or back of the head and neck, primarily caused by muscle contraction and psychological stress.</p>

      <h3>Symptoms of Tension Headache</h3>
      <ul>
        <li>Dull, pressing, or squeezing pain (often described as a tight vise around the head).</li>
        <li>Bilateral distribution (affects both sides of the head equally).</li>
        <li>Mild to moderate intensity that does not worsen with routine physical activity.</li>
        <li>Tenderness in pericranial muscles (scalp, neck, and shoulder muscles).</li>
        <li>Absence of severe nausea, vomiting, or focal neurological deficits.</li>
        <li>Occasional mild sensitivity to either light OR sound (rarely both).</li>
        <li>Duration ranging from 30 minutes to several days.</li>
      </ul>

      <h3>Triggers & Underlying Causes</h3>
      <ul>
        <li>Emotional stress, anxiety, and depression.</li>
        <li>Cervical muscle strain and poor posture (e.g., hunched over computers or smartphone screens).</li>
        <li>Eye strain from uncorrected vision or excessive digital screen time.</li>
        <li>Dehydration and skipping meals (hypoglycemia).</li>
        <li>Sleep deprivation or irregular sleep schedules.</li>
      </ul>

      <h3>Treatment & Relief Strategies</h3>
      <h4>1. Pharmacological Therapy</h4>
      <ul>
        <li><strong>OTC Pain Relievers:</strong> Ibuprofen (Advil), Acetaminophen (Tylenol), or Aspirin taken early during mild pain.</li>
        <li><strong>Combination Analgesics:</strong> Acetaminophen + Caffeine for enhanced pain relief.</li>
        <li><strong>Muscle Relaxants:</strong> Prescribed by a physician for acute cervical muscle spasm.</li>
      </ul>

      <h4>2. Non-Pharmacological & Home Remedies</h4>
      <ul>
        <li><strong>Hot or Cold Therapy:</strong> Warm heating pad or ice pack applied to the neck and shoulders.</li>
        <li><strong>Massage & Physical Therapy:</strong> Scalp, temple, and neck muscle massage to release trigger points.</li>
        <li><strong>Ergonomics & Posture Correction:</strong> Maintain upright spine posture and follow the 20-20-20 screen rule (every 20 mins, look 20 feet away for 20 secs).</li>
        <li><strong>Stress Management:</strong> Deep breathing exercises, yoga, and adequate hydration (2–3L water/day).</li>
      </ul>

      <h3>When to Consult a Physician</h3>
      <p>Consult Dr. Sai Sekhar P if headaches occur &gt; 15 days per month (chronic tension headache), if pain is sudden and severe ("thunderclap headache"), or if accompanied by fever, stiff neck, visual loss, or numbness.</p>
    `
  },

  "migraine": {
    name: "Migraine Management",
    content: `
      <p>A <strong>Migraine</strong> is a complex neurological disorder characterized by recurrent episodes of severe, throbbing, or pulsating headache, typically affecting one side of the head. Migraine attacks can last from 4 to 72 hours and are accompanied by sensory disturbances, nausea, and extreme light sensitivity.</p>

      <h3>Types of Migraine</h3>
      <ul>
        <li><strong>1. Migraine with Aura (Classic Migraine):</strong> Accompanied by transient neurological warning signs (auras) 10–60 minutes before headache onset.<br />
            <em>Aura Symptoms:</em> Visual flashing lights, blind spots, zigzag lines (scintillating scotoma), tingling in face/hand, or speech difficulty.
        </li>
        <li><strong>2. Migraine without Aura (Common Migraine):</strong> Sudden severe throbbing headache occurring without premonitory aura signs.</li>
        <li><strong>3. Chronic Migraine:</strong> Experiencing headache episodes &gt; 15 days per month for at least 3 consecutive months, with &ge; 8 days meeting migraine criteria.</li>
        <li><strong>4. Hemiplegic Migraine (Rare):</strong> Rare subtype causing temporary motor weakness or paralysis on one side of the body, mimicking a stroke.</li>
      </ul>

      <h3>Symptoms During an Attack</h3>
      <ul>
        <li>Severe, throbbing, or pulsating headache pain (usually unilateral).</li>
        <li>Extreme sensitivity to light (photophobia), sound (phonophobia), and odors (osmophobia).</li>
        <li>Persistent nausea and vomiting.</li>
        <li>Blurry vision, dizziness, or lightheadedness.</li>
        <li>Pain worsening with routine physical movement (stair climbing, walking).</li>
      </ul>

      <h3>Common Migraine Triggers</h3>
      <ul>
        <li>Psychological stress and anxiety release.</li>
        <li>Sleep disturbances (insomnia or oversleeping).</li>
        <li>Hormonal fluctuations (menstrual cycle, pregnancy, oral contraceptives).</li>
        <li>Dietary triggers: Aged cheese, chocolate, caffeine withdrawal, processed meats (nitrates), MSG, or alcohol (red wine).</li>
        <li>Environmental factors: Bright flickering lights, loud noises, strong perfumes, weather/barometric pressure shifts.</li>
        <li>Dehydration or skipping meals.</li>
      </ul>

      <h3>Treatment Protocols</h3>
      <h4>1. Acute Rescue Medications</h4>
      <ul>
        <li><strong>Triptans (e.g., Sumatriptan, Rizatriptan):</strong> Serotonin 5-HT1B/1D receptor agonists that constrict cranial blood vessels and block neuro-inflammation.</li>
        <li><strong>Analgesics & NSAIDs:</strong> High-dose Ibuprofen, Naproxen, or combination pain relievers.</li>
        <li><strong>Anti-Emetic Drugs:</strong> Metoclopramide or Ondansetron to control severe nausea and enhance drug absorption.</li>
      </ul>

      <h4>2. Prophylactic Preventative Therapy</h4>
      <p>Indicated for frequent attacks (&gt; 4/month): Beta-blockers (Propranolol), Anticonvulsants (Topiramate), Calcium channel blockers, or CGRP monoclonal antibodies.</p>

      <h4>3. Home Care Interventions</h4>
      <p>Rest in a dark, quiet, soundproof room; apply cold compress to forehead/neck; drink plenty of water; and maintain a consistent sleep routine.</p>
    `
  },

  "rheumatoid-arthritis": {
    name: "Rheumatoid Arthritis",
    content: `
      <p><strong>Rheumatoid Arthritis (RA)</strong> is a chronic, systemic autoimmune disease characterized by persistent synovial inflammation of joints. Unlike osteoarthritis (caused by mechanical wear and tear), RA occurs when the body's immune system mistakenly attacks the synovial lining, leading to joint erosion, bone destruction, and articular deformity.</p>

      <h3>Symptoms of Rheumatoid Arthritis</h3>
      <ul>
        <li><strong>Symmetrical Joint Pain & Swelling:</strong> Tender, warm, swollen joints symmetrically affecting both sides of the body (e.g., both wrists or hands).</li>
        <li><strong>Small Joint Predilection:</strong> Early involvement of Metacarpophalangeal (MCP) and Proximal Interphalangeal (PIP) joints of fingers and feet.</li>
        <li><strong>Prolonged Morning Stiffness:</strong> Joint stiffness lasting longer than 30–60 minutes after waking up or prolonged inactivity.</li>
        <li><strong>Systemic Symptoms:</strong> Chronic fatigue, low-grade fever, weight loss, and general malaise.</li>
        <li><strong>Late Joint Deformities:</strong> Ulnar deviation of fingers, Swan-neck deformity, Boutonnière deformity, and rheumatoid nodules under skin.</li>
      </ul>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Autoimmune Pathogenesis:</strong> Immune system produces autoantibodies (RF & anti-CCP) attacking joint tissue.</li>
        <li><strong>Genetic Susceptibility:</strong> Strong association with HLA-DR4 gene alleles.</li>
        <li><strong>Gender:</strong> 2 to 3 times more prevalent in women.</li>
        <li><strong>Tobacco Smoking:</strong> Major environmental risk factor elevating disease severity and anti-CCP positivity.</li>
        <li><strong>Obesity & Chronic Infections:</strong> Contributes to systemic pro-inflammatory cytokine burden.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Rheumatoid Factor (RF) Blood Test:</strong> Positive in ~70–80% of RA patients.</li>
        <li><strong>Anti-Cyclic Citrullinated Peptide (Anti-CCP):</strong> Highly specific blood biomarker (&gt; 95% specificity) for early RA.</li>
        <li><strong>Inflammatory Markers (ESR & CRP):</strong> Measures systemic inflammatory activity.</li>
        <li><strong>Imaging (X-ray, Ultrasound, MRI):</strong> Identifies early synovial thickening, joint space narrowing, and marginal bone erosions.</li>
      </ul>

      <h3>Treatment & Clinical Management</h3>
      <ul>
        <li><strong>1. Disease-Modifying Antirheumatic Drugs (DMARDs):</strong>
          <ul>
            <li><em>Methotrexate:</em> First-line anchor DMARD to slow progressive joint destruction.</li>
            <li><em>Leflunomide, Sulfasalazine, Hydroxychloroquine:</em> Alternative or combination synthetic DMARDs.</li>
          </ul>
        </li>
        <li><strong>2. Biologic & Targeted Synthetic Therapies:</strong> TNF-alpha inhibitors (Adalimumab, Etanercept), IL-6 inhibitors, or JAK inhibitors (Tofacitinib) for refractory RA.</li>
        <li><strong>3. Symptom Relief:</strong> NSAIDs (Ibuprofen, Naproxen) and low-dose Corticosteroids (Prednisone) for acute flare control.</li>
        <li><strong>4. Physical Therapy & Lifestyle:</strong> Low-impact exercises (swimming, cycling), anti-inflammatory omega-3 diet, joint splinting, and joint replacement surgery for end-stage destruction.</li>
      </ul>
    `
  },

  "cervical-spondylosis": {
    name: "Cervical Spondylosis",
    content: `
      <p><strong>Cervical Spondylosis</strong> (cervical osteoarthritis / neck degenerative disc disease) is an age-related wear-and-tear condition affecting the cervical spine (neck region). It involves disc dehydration, loss of intervertebral height, osteophyte (bone spur) formation, and potential compression of cervical nerve roots or spinal cord.</p>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Aging:</strong> Natural drying, flattening, and loss of elasticity in cervical intervertebral discs over time.</li>
        <li><strong>Bone Spurs (Osteophytes):</strong> Extra bone overgrowth reacting to disc degeneration, narrowing neural foramina.</li>
        <li><strong>Herniated or Bulging Discs:</strong> Cracks in outer disc annulus letting gel center protrude and press on spinal nerves.</li>
        <li><strong>Poor Posture:</strong> Forward head posture ("tech neck") from prolonged computer or smartphone usage.</li>
        <li><strong>Neck Injuries:</strong> Past trauma or whiplash accelerating spinal wear.</li>
        <li><strong>Occupational Strain & Smoking:</strong> Heavy lifting, repetitive neck motion, and nicotine reducing disc vascular supply.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Neck pain, stiffness, and restricted range of neck movement (worse in morning or after sustained posture).</li>
        <li>Cervicogenic headaches originating from skull base radiating forward to forehead.</li>
        <li>Cervical Radiculopathy: Numbness, tingling ("pins and needles"), or burning pain radiating down shoulders, arms, and fingers.</li>
        <li>Muscle weakness in hands or arms (difficulty gripping objects or buttoning shirts).</li>
        <li>Neck crepitus (grinding or popping sensation during neck rotation).</li>
        <li>Severe Complication (Cervical Myelopathy): Unsteadiness, difficulty walking, balance loss, or bowel/bladder dysfunction due to spinal cord compression.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Clinical Neurological Exam:</strong> Testing arm reflexes, cutaneous sensation, motor strength, and Spurling's maneuver.</li>
        <li><strong>Cervical Spine X-Ray:</strong> Visualizes disc space narrowing, loss of cervical lordosis, and bone spurs.</li>
        <li><strong>MRI or CT Scan:</strong> Provides detailed cross-sectional views of herniated discs, nerve root foraminal stenosis, and spinal cord compression.</li>
        <li><strong>Electromyography (EMG):</strong> Measures electrical conduction to differentiate nerve root compression from peripheral neuropathy.</li>
      </ul>

      <h3>Treatment Modalities</h3>
      <ul>
        <li><strong>1. Medications:</strong> Analgesics (Ibuprofen, Paracetamol), Muscle Relaxants (Cyclobenzaprine), Neuropathic Pain Meds (Pregabalin, Gabapentin), short-course oral Steroids or epidural injections.</li>
        <li><strong>2. Physical Therapy & Exercises:</strong> Isometric neck strengthening, gentle cervical traction, posture re-education, and ergonomics.</li>
        <li><strong>3. Lifestyle & Home Remedies:</strong> Cervical contour pillow, hot/cold therapy, avoiding prolonged neck flexion.</li>
        <li><strong>4. Surgical Intervention:</strong> Anterior Cervical Discectomy and Fusion (ACDF) or Laminectomy indicated for persistent weakness or spinal cord compression.</li>
      </ul>
    `
  },

  "lumbar-spondylosis": {
    name: "Lumbar Spondylosis",
    content: `
      <p><strong>Lumbar Spondylosis</strong> (lower back degenerative arthritis) is an age-related degenerative condition affecting the lumbar spine. It is characterized by intervertebral disc degeneration, facet joint osteoarthritis, and osteophyte growth, causing chronic lower back pain, stiffness, and sciatica.</p>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Age-Related Disc Degeneration:</strong> Lumbar discs lose water content, shrink, and lose shock-absorption capacity.</li>
        <li><strong>Osteophyte (Bone Spur) Overgrowth:</strong> Bony spurs encroaching on spinal canal or neural exit foramina.</li>
        <li><strong>Facet Joint Osteoarthritis:</strong> Wear of cartilage lining facet joints in the back of the spine.</li>
        <li><strong>Repetitive Strain & Heavy Lifting:</strong> Occupations requiring heavy manual labor or prolonged sitting.</li>
        <li><strong>Obesity & Inactivity:</strong> Increased mechanical load on lumbar vertebrae paired with weak core stabilizing muscles.</li>
        <li><strong>Genetics & Previous Spinal Trauma:</strong> Inherited susceptibility or past lumbar injuries.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Chronic lower back pain and stiffness (worse after waking up, prolonged sitting, or bending forward).</li>
        <li><strong>Sciatica (Lumbar Radiculopathy):</strong> Sharp, shooting, or burning pain radiating from lower back through buttocks down back of leg into foot.</li>
        <li>Paresthesias: Numbness, tingling, or "pins and needles" in leg or foot.</li>
        <li>Leg muscle weakness or feeling of legs giving out.</li>
        <li>Difficulty standing upright or walking long distances.</li>
        <li>Grinding or cracking sensation (crepitus) in lower back during movement.</li>
      </ul>

      <h3>Diagnostic Workup</h3>
      <ul>
        <li><strong>Physical & Neurological Exam:</strong> Straight Leg Raise (SLR) test, checking knee/ankle reflexes, and dermatome sensation.</li>
        <li><strong>Lumbar Spine X-Ray:</strong> Detects narrowing of intervertebral disc spaces, vertebral alignment, and bone spurs.</li>
        <li><strong>Lumbar MRI / CT Scan:</strong> Evaluates spinal canal stenosis, herniated discs, and nerve root compression.</li>
        <li><strong>Electromyography (EMG):</strong> Assesses nerve root damage severity.</li>
      </ul>

      <h3>Treatment & Management Protocols</h3>
      <ul>
        <li><strong>1. Medications:</strong> NSAIDs (Ibuprofen, Naproxen), Acetaminophen, Muscle Relaxants, Epidural Steroid Injections, and Neuropathic medications (Pregabalin / Gabapentin) for radicular pain.</li>
        <li><strong>2. Physical Therapy & Core Rehabilitation:</strong> Core stabilization exercises (planks, pelvic tilts), hamstrings stretching, back extension exercises, and posture re-training.</li>
        <li><strong>3. Lifestyle Modifications:</strong> Weight loss to reduce lumbar load, ergonomic chair lumbar support, proper lifting technique (bending knees), heat/ice therapy.</li>
        <li><strong>4. Surgical Options:</strong> Decompressive Laminectomy or Spinal Fusion reserved for progressive neurological deficit or intractable pain.</li>
      </ul>
    `
  },

  "acute-gastritis": {
    name: "Acute Gastritis",
    content: `
      <p><strong>Acute Gastritis</strong> is a sudden, acute inflammation of the stomach lining (gastric mucosa). It produces upper abdominal burning pain, nausea, indigestion, and mucosal erosions.</p>

      <h3>Causes of Acute Gastritis</h3>
      <ul>
        <li><strong>Helicobacter pylori (H. pylori) Bacterial Infection:</strong> Bacteria damaging the protective gastric mucosal barrier.</li>
        <li><strong>NSAID Medication Overuse:</strong> Long-term or high-dose use of NSAIDs (Ibuprofen, Naproxen, Aspirin) inhibiting protective prostaglandins.</li>
        <li><strong>Excessive Alcohol & Tobacco:</strong> Direct chemical irritation and breakdown of stomach lining.</li>
        <li><strong>Spicy, Acidic, or Fried Foods:</strong> Aggravates existing gastric mucosal inflammation.</li>
        <li><strong>Bile Reflux:</strong> Backflow of bile from duodenum into stomach.</li>
        <li><strong>Stress-Induced Gastritis:</strong> Physiological stress from severe illness, surgery, severe burns, or major trauma.</li>
        <li><strong>Autoimmune Gastritis:</strong> Autoantibodies attacking parietal cells producing stomach acid and intrinsic factor.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Burning or gnawing pain/discomfort in upper abdomen (epigastrium).</li>
        <li>Nausea and vomiting (may be clear, green/yellow bile, or bloody in severe erosions).</li>
        <li>Indigestion, abdominal bloating, and feeling overly full after small meals.</li>
        <li>Loss of appetite and frequent belching/hiccups.</li>
        <li>Dark tarry stools (melena) or coffee-ground vomit in cases of acute mucosal bleeding.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Physical Examination:</strong> Epigastric tenderness on palpation.</li>
        <li><strong>Upper Gastrointestinal Endoscopy:</strong> Direct visual examination of stomach mucosa showing redness, edema, or hemorrhages.</li>
        <li><strong>H. pylori Diagnostic Testing:</strong> Urea Breath Test (UBT), Stool Antigen Test, or endoscopic biopsy.</li>
        <li><strong>Blood Tests & Stool Occult Blood:</strong> Evaluates anemia and hidden GI bleeding.</li>
      </ul>

      <h3>Treatment & Recovery Plan</h3>
      <ul>
        <li><strong>1. Acid Suppressive Medications:</strong>
          <ul>
            <li><em>Proton Pump Inhibitors (PPIs):</em> Omeprazole, Pantoprazole, Rabeprazole to suppress gastric acid secretion.</li>
            <li><em>H2 Receptor Blockers:</em> Famotidine to reduce stomach acid production.</li>
            <li><em>Antacids:</em> Liquid aluminum/magnesium hydroxide for fast acid neutralization.</li>
            <li><em>Mucosal Coating Agents:</em> Sucralfate to coat and protect stomach lining ulcers.</li>
          </ul>
        </li>
        <li><strong>2. H. pylori Eradication Therapy:</strong> Triple/Quadruple therapy combining PPI + Antibiotics (Amoxicillin + Clarithromycin + Metronidazole).</li>
        <li><strong>3. Dietary Modifications:</strong> Small frequent bland meals, avoiding spicy/acidic/fried foods, eliminating alcohol, caffeine, and smoking.</li>
      </ul>
    `
  },

  "acute-and-chronic-diarrhea": {
    name: "Acute and Chronic Diarrhea",
    content: `
      <p><strong>Diarrhea</strong> is characterized by loose, watery bowel movements occurring more frequently than normal (&ge; 3 times daily). Depending on duration, it is clinically categorized as Acute (lasting &lt; 2 weeks) or Chronic (persisting &gt; 4 weeks).</p>

      <h3>Comparative Breakdown</h3>
      <div style="overflow-x: auto; margin: 16px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: var(--primary-light, #f0fdf4); border-bottom: 2px solid var(--primary);">
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Clinical Feature</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Acute Diarrhea</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Chronic Diarrhea</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Duration</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Lasts less than 14 days.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Persists for more than 4 weeks (&gt; 28 days).</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Common Causes</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Viral/bacterial/parasitic gastroenteritis, food poisoning, traveler's diarrhea, acute medication reaction.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Irritable Bowel Syndrome (IBS-D), Inflammatory Bowel Disease (Crohn's, Ulcerative Colitis), Celiac disease, Malabsorption, Thyroid disorders.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Primary Symptoms</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Sudden onset watery stools, abdominal cramps, nausea, mild fever.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Recurrent loose stools, progressive weight loss, nutritional deficiencies, blood/mucus in stool.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Treatment Approach</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Self-limiting; hydration (ORS), BRAT diet, short-term antidiarrheals/probiotics.</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Diagnostic workup (colonoscopy, blood tests), treating underlying systemic cause.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Detailed Causes</h3>
      <ul>
        <li><strong>Causes of Acute Diarrhea:</strong> Viral infections (Norovirus, Rotavirus), Bacterial food poisoning (Salmonella, E. coli, Campylobacter), Traveler's diarrhea, Medications (Antibiotics, laxatives, antacids with magnesium), Acute stress.</li>
        <li><strong>Causes of Chronic Diarrhea:</strong> Irritable Bowel Syndrome (IBS), Inflammatory Bowel Disease (Crohn's disease, Ulcerative Colitis), Chronic infections (Giardia, C. difficile), Malabsorption (Celiac disease, Lactose intolerance, Pancreatic insufficiency), Endocrine disorders (Hyperthyroidism, Diabetic enteropathy).</li>
      </ul>

      <h3>Symptoms & Warning Red Flags</h3>
      <ul>
        <li>Loose, watery stools, abdominal colicky cramps, nausea, bloating.</li>
        <li><strong style="color: #dc2626;">Red Flags (Seek Immediate Medical Care):</strong> Dehydration (dizziness, dark urine, confusion), visible blood or pus in stool, persistent high fever (&gt; 102°F), severe abdominal pain, unexplained weight loss.</li>
      </ul>

      <h3>Treatment Protocols</h3>
      <ul>
        <li><strong>Hydration (Essential):</strong> Oral Rehydration Salts (ORS), electrolyte fluids, broths.</li>
        <li><strong>Bland Diet:</strong> BRAT diet (Bananas, Rice, Applesauce, Toast). Avoid dairy, high-fat, caffeine, alcohol.</li>
        <li><strong>Medications:</strong> Loperamide (for non-invasive acute cases), Probiotics, targeted antibiotics for bacterial infections, anti-inflammatory drugs (Mesalamine/steroids) for IBD, or gluten-free diet for Celiac disease.</li>
      </ul>
    `
  },

  "constipation": {
    name: "Constipation Care",
    content: `
      <p><strong>Constipation</strong> is a digestive condition defined by infrequent bowel movements (typically fewer than 3 per week), difficulty or straining during defecation, and passing hard, dry stools, often accompanied by abdominal discomfort and bloating.</p>

      <h3>Causes of Constipation</h3>
      <ul>
        <li><strong>Low-Fiber Diet:</strong> Insufficient dietary fiber intake from fruits, vegetables, and whole grains.</li>
        <li><strong>Dehydration:</strong> Inadequate daily water consumption causing excessive water reabsorption in colon.</li>
        <li><strong>Physical Inactivity:</strong> Sedentary lifestyle slowing intestinal peristalsis.</li>
        <li><strong>Ignoring Defecation Urges:</strong> Repeatedly holding in bowel movements causing hardened fecal matter.</li>
        <li><strong>Medication Side Effects:</strong> Opioid pain relievers, iron supplements, antacids containing calcium/aluminum, antidepressants, and antihistamines.</li>
        <li><strong>Chronic Medical Conditions:</strong> Irritable Bowel Syndrome (IBS-C), Hypothyroidism (slow metabolism), Diabetes (autonomic neuropathy), Parkinson's disease, pregnancy.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Fewer than 3 bowel movements per week</li>
        <li>Hard, lumpy, dry, or painful stools</li>
        <li>Excessive straining during bowel movements</li>
        <li>Sensation of incomplete bowel evacuation or anorectal blockage</li>
        <li>Abdominal bloating, cramping, and fullness</li>
        <li>Loss of appetite or mild nausea</li>
      </ul>

      <h3>Treatment & Relief Protocol</h3>
      <h4>1. Dietary & Lifestyle Changes (First Line)</h4>
      <ul>
        <li><strong>Increase Fiber Intake:</strong> Aim for 25–30 grams of fiber daily (oatmeal, beans, prunes, apples, leafy greens).</li>
        <li><strong>Hydration:</strong> Drink 2 to 3 liters of water throughout the day.</li>
        <li><strong>Daily Physical Activity:</strong> 30 minutes of daily walking, swimming, or yoga to stimulate gut movement.</li>
        <li><strong>Bowel Habits:</strong> Never ignore the urge; establish a regular post-meal bathroom routine.</li>
      </ul>

      <h4>2. Home & Natural Remedies</h4>
      <ul>
        <li>Warm lemon water in the morning to stimulate peristalsis.</li>
        <li>Flaxseeds, chia seeds, or dried prunes (natural sorbitol laxatives).</li>
        <li>1 tablespoon of olive oil on empty stomach.</li>
      </ul>

      <h4>3. Medical Treatments (Laxatives)</h4>
      <ul>
        <li><strong>Stool Softeners:</strong> Docusate sodium (Colace) to hydrate stool.</li>
        <li><strong>Bulk-Forming Fiber Supplements:</strong> Psyllium husk (Metamucil), Methylcellulose (Citrucel).</li>
        <li><strong>Osmotic Laxatives:</strong> Polyethylene Glycol 3350 (MiraLAX), Lactulose, Milk of Magnesia.</li>
        <li><strong>Stimulant Laxatives:</strong> Senna, Bisacodyl (Dulcolax) reserved for short-term occasional use.</li>
      </ul>
      <p><em>Seek medical checkup if constipation persists &gt; 3 weeks, or is accompanied by blood in stool, severe pain, or unexplained weight loss.</em></p>
    `
  },

  "jaundice-liver-problems": {
    name: "Jaundice & Liver Care",
    content: `
      <p><strong>Jaundice</strong> is a clinical condition characterized by yellow pigmentation of the skin, sclera (whites of the eyes), and mucous membranes caused by hyperbilirubinemia (excessive accumulation of bilirubin in blood). It is a major clinical sign of underlying liver, gallbladder, or hematological dysfunction.</p>

      <h3>Causes of Jaundice & Liver Disease</h3>
      <h4>1. Hepatic (Liver-Related) Causes</h4>
      <ul>
        <li><strong>Viral Hepatitis (A, B, C, D, E):</strong> Viral infections causing acute/chronic hepatic inflammation.</li>
        <li><strong>Alcoholic & Non-Alcoholic Fatty Liver Disease (AFLD / NAFLD):</strong> Excess fat accumulation leading to steatohepatitis.</li>
        <li><strong>Liver Cirrhosis:</strong> End-stage chronic liver scarring from prolonged inflammation.</li>
        <li><strong>Toxic / Drug-Induced Liver Injury:</strong> Paracetamol overdose, herbal toxins, or hepatotoxic medications.</li>
        <li><strong>Liver Cancer:</strong> Hepatocellular carcinoma or metastatic liver tumors.</li>
      </ul>

      <h4>2. Extra-Hepatic & Hemolytic Causes</h4>
      <ul>
        <li><strong>Gallbladder & Biliary Obstruction:</strong> Gallstones (cholelithiasis), bile duct strictures, or pancreatic head tumors blocking bile flow.</li>
        <li><strong>Hemolysis:</strong> Rapid breakdown of red blood cells producing excess unconjugated bilirubin.</li>
        <li><strong>Genetic Disorders:</strong> Gilbert’s syndrome or Crigler-Najjar syndrome affecting bilirubin conjugation.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Yellowing of skin, sclera, and oral mucosa</li>
        <li>Dark tea-colored or cola-colored urine</li>
        <li>Pale, light, or clay-colored stools</li>
        <li>Chronic fatigue, generalized weakness, and loss of appetite</li>
        <li>Nausea, vomiting, and upper right quadrant abdominal pain</li>
        <li>Abdominal swelling (Ascites) and leg edema</li>
        <li>Severe cutaneous itching (Pruritus) due to bile salt deposition</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Liver Function Tests (LFTs):</strong> Serum Total & Direct Bilirubin, ALT, AST, Alkaline Phosphatase (ALP), Gamma-GT, Serum Albumin.</li>
        <li><strong>Complete Blood Count (CBC) & Coagulation Profile:</strong> Evaluates anemia, hemolysis, and PT/INR clotting function.</li>
        <li><strong>Viral Hepatitis Serology Panel:</strong> Anti-HAV, HBsAg, Anti-HCV tests.</li>
        <li><strong>Diagnostic Imaging:</strong> Abdominal Ultrasound, CT Scan, MRCP (Magnetic Resonance Cholangiopancreatography).</li>
        <li><strong>Liver Biopsy:</strong> Assesses liver fibrosis, inflammation, or malignancy.</li>
      </ul>

      <h3>Treatment & Liver Care Protocol</h3>
      <ul>
        <li><strong>Supportive Care:</strong> High fluid hydration, complete alcohol & smoking cessation, liver-friendly low-fat diet.</li>
        <li><strong>Medical Therapy:</strong> Direct-acting antivirals for Hepatitis B/C; Spironolactone/Furosemide diuretics for ascites; Cholestyramine for pruritus.</li>
        <li><strong>Surgical Interventions:</strong> Laparoscopic Cholecystectomy for gallstone obstruction; ERCP for stent placement; Liver Transplantation for end-stage cirrhosis.</li>
      </ul>
    `
  },

  "acute-renal-failure": {
    name: "Acute Renal Failure (AKI)",
    content: `
      <p><strong>Acute Renal Failure (Acute Kidney Injury - AKI)</strong> is a sudden, rapid decline in renal filtering function occurring within hours to days. It leads to nitrogenous waste accumulation (uremia), fluid overload, and dangerous electrolyte disturbances.</p>

      <h3>Clinical Classification of Causes</h3>
      <ul>
        <li><strong>1. Pre-Renal AKI (Reduced Blood Flow to Kidneys):</strong>
          <ul>
            <li>Severe dehydration, hypovolemic shock, or massive blood loss.</li>
            <li>Congestive heart failure (decreased cardiac output).</li>
            <li>Sepsis / Septic shock causing systemic vasodilation.</li>
            <li>Hepatorenal syndrome in advanced liver failure.</li>
          </ul>
        </li>
        <li><strong>2. Intrinsic AKI (Direct Kidney Parenchymal Damage):</strong>
          <ul>
            <li>Acute Tubular Necrosis (ATN) from severe ischemia or nephrotoxins.</li>
            <li>Nephrotoxic drugs: NSAIDs, Aminoglycoside antibiotics, Radiocontrast dyes.</li>
            <li>Glomerulonephritis, Acute Interstitial Nephritis (AIN).</li>
            <li>Autoimmune diseases (Systemic Lupus Erythematosus, Vasculitis).</li>
          </ul>
        </li>
        <li><strong>3. Post-Renal AKI (Urine Outflow Blockage):</strong>
          <ul>
            <li>Bilateral kidney stones or ureteral calculi.</li>
            <li>Benign Prostatic Hyperplasia (BPH) or prostate cancer in men.</li>
            <li>Bladder, cervical, or pelvic retroperitoneal tumors.</li>
          </ul>
        </li>
      </ul>

      <h3>Symptoms of Acute Renal Failure</h3>
      <ul>
        <li>Oliguria (significantly reduced urine output &lt; 400 mL/day) or Anuria (no urine output).</li>
        <li>Fluid retention causing swelling (edema) in legs, feet, ankles, face, or abdomen.</li>
        <li>Severe fatigue, weakness, and nausea/vomiting due to uremic toxin buildup.</li>
        <li>Shortness of breath (dyspnea) from pulmonary fluid accumulation.</li>
        <li>Confusion, drowsiness, or seizures due to uremic encephalopathy or hyponatremia.</li>
        <li>Cardiac arrhythmias (irregular heartbeat) caused by severe hyperkalemia (high potassium).</li>
      </ul>

      <h3>🚨 Emergency Red Flag Warning Signs</h3>
      <p style="color: #dc2626; font-weight: bold;">Seek emergency ICU care immediately if experiencing: No urine output for 12+ hours, severe chest pain/shortness of breath, severe confusion, or seizures.</p>

      <h3>Treatment & Immediate Protocol</h3>
      <ul>
        <li>Emergency hospitalization and vital organ monitoring.</li>
        <li>Hemodynamic fluid resuscitation for pre-renal hypovolemia OR strict fluid restriction if fluid overloaded.</li>
        <li>Immediate discontinuation of all nephrotoxic medications.</li>
        <li>Correction of hyperkalemia (calcium gluconate, insulin + dextrose, sodium polystyrene).</li>
        <li>Surgical or endoscopic relief of urinary tract obstruction (Foley catheter, ureteral stent).</li>
        <li>Emergency Hemodialysis for severe refractory hyperkalemia, fluid overload, or uremia.</li>
      </ul>
    `
  },

  "chronic-renal-failure": {
    name: "Chronic Renal Failure (CKD)",
    content: `
      <p><strong>Chronic Renal Failure (Chronic Kidney Disease - CKD)</strong> is the gradual, progressive, and irreversible loss of renal filtering capacity over months or years. As nephrons degrade, kidneys lose the ability to filter waste products, balance electrolytes, and regulate body fluid levels.</p>

      <h3>Causes & Primary Risk Factors</h3>
      <ul>
        <li><strong>Diabetic Nephropathy:</strong> Uncontrolled diabetes mellitus is the leading cause worldwide.</li>
        <li><strong>Hypertension (High Blood Pressure):</strong> Chronically elevated pressure damaging renal arterioles.</li>
        <li><strong>Chronic Glomerulonephritis:</strong> Autoimmune inflammation of kidney filtering units.</li>
        <li><strong>Polycystic Kidney Disease (PKD):</strong> Genetic condition causing multiple fluid-filled cysts in kidneys.</li>
        <li><strong>Recurrent Pyelonephritis & Urinary Obstruction:</strong> Repeated kidney infections or long-standing stones.</li>
        <li><strong>Smoking, Obesity, & High Cholesterol:</strong> Accelerates renal microvascular damage.</li>
      </ul>

      <h3>Stages of Chronic Kidney Disease (CKD)</h3>
      <div style="overflow-x: auto; margin: 16px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: var(--primary-light, #f0fdf4); border-bottom: 2px solid var(--primary);">
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Stage</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">eGFR (mL/min/1.73m²)</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Kidney Status & Symptoms</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 1</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&ge; 90</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Normal function with early kidney damage (proteinuria/microalbuminuria).</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 2</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">60–89</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Mild reduction in filtration; usually asymptomatic.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 3</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">30–59</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Moderate reduction; swelling, rising blood pressure, early anemia.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 4</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">15–29</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Severe reduction; pronounced edema, fatigue, nausea, metabolic acidosis.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Stage 5</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&lt; 15</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">End-Stage Renal Disease (ESRD); kidney failure requiring dialysis or transplant.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Symptoms</h3>
      <ul>
        <li>Early stages: Asymptomatic.</li>
        <li>Later stages: Progressive fatigue, persistent edema (swelling of legs, ankles, face), foamy urine, nocturia, nausea, loss of appetite, metallic taste in mouth (uremic fetor), dry itchy skin (pruritus), muscle cramps, anemia, and difficult-to-control hypertension.</li>
      </ul>

      <h3>Management & Progression Delay Protocol</h3>
      <ul>
        <li><strong>Strict Blood Pressure & Glycemic Target:</strong> BP &lt; 130/80 mmHg, HbA1c &lt; 7.0%.</li>
        <li><strong>Renoprotective Medications:</strong> ACE Inhibitors (Lisinopril) or ARBs (Losartan), and SGLT2 Inhibitors to reduce intra-glomerular pressure and delay ESRD.</li>
        <li><strong>Renal Nutritional Therapy:</strong> Low-protein, low-sodium (&lt; 2g/day), low-potassium, and low-phosphorus diet under nephrology guidance.</li>
        <li><strong>Anemia & Bone Disease Management:</strong> Erythropoietin-stimulating agents (ESA), iron supplementation, and phosphate binders.</li>
        <li><strong>Renal Replacement Therapy (Stage 5):</strong> Maintenance Hemodialysis, Peritoneal Dialysis, or Kidney Transplantation.</li>
      </ul>
    `
  },

  "ischemic-heart-disease": {
    name: "Ischemic Heart Disease (CAD)",
    content: `
      <p><strong>Ischemic Heart Disease (IHD)</strong>, also widely known as <strong>Coronary Artery Disease (CAD)</strong>, is a major cardiovascular condition occurring when narrow or hardened coronary arteries restrict oxygen-rich blood flow to the myocardium (heart muscle). Under the clinical supervision of <strong>Dr. Sai Sekhar Pyla</strong> (<strong>MD General Medicine, Diabetologist</strong>) at <strong>Trinetra Medicals, Muralinagar, Visakhapatnam</strong>, patients receive comprehensive cardiac risk stratification, medical management, and preventative vascular care.</p>
      
      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Coronary Atherosclerosis:</strong> Accumulation of fatty cholesterol plaques causing arterial luminal narrowing.</li>
        <li><strong>Uncontrolled Diabetes Mellitus:</strong> Chronically elevated blood sugar accelerates vascular inflammation and micro/macrovascular damage.</li>
        <li><strong>Systemic Hypertension & Dyslipidemia:</strong> High blood pressure strains arterial walls while high LDL cholesterol feeds plaque buildup.</li>
        <li><strong>Tobacco Use & Physical Inactivity:</strong> Cigarette smoking causes acute endothelial dysfunction and arterial spasm.</li>
        <li><strong>Family History & Metabolic Syndrome:</strong> Genetic predisposition, abdominal obesity, and high serum triglycerides.</li>
      </ul>

      <h3>Symptoms & Warning Signs</h3>
      <ul>
        <li><strong>Angina Pectoris:</strong> Squeezing, pressure-like, or burning chest tightness radiating to the left arm, neck, jaw, or epigastrium.</li>
        <li><strong>Exertional Dyspnea:</strong> Shortness of breath triggered by mild physical activity or climbing stairs.</li>
        <li><strong>Atypical Symptoms in Diabetics:</strong> "Silent ischemia" where diabetic neuropathy masks classical chest pain; patients may only present with unexplained diaphoresis (sweating), profound fatigue, or nausea.</li>
        <li><strong>Palpitations & Lightheadedness:</strong> Irregular heart rhythm or feeling faint during exertion.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>12-Lead Electrocardiogram (ECG):</strong> Identifies ischemic ST-T wave changes, bundle branch blocks, or previous silent infarcts.</li>
        <li><strong>2D Echocardiogram (ECHO):</strong> Evaluates left ventricular ejection fraction (LVEF), wall motion abnormalities, and valvular integrity.</li>
        <li><strong>Cardiac Biomarkers:</strong> Serum High-Sensitivity Troponin T/I and CK-MB levels during acute symptom presentation.</li>
        <li><strong>Stress Testing & Coronary Angiography:</strong> Treadmill Test (TMT) or CT Coronary Angioplasty for precise luminal mapping.</li>
      </ul>

      <h3>Treatment & Clinical Management Protocol</h3>
      <ul>
        <li><strong>Antiplatelet & Antithrombotic Therapy:</strong> Low-dose Aspirin and Clopidogrel to prevent intracoronary thrombus formation.</li>
        <li><strong>Lipid-Lowering Statin Therapy:</strong> High-intensity Statins (Atorvastatin / Rosuvastatin) to stabilize atherosclerotic plaques and maintain target LDL &lt; 70 mg/dL.</li>
        <li><strong>Hemodynamic Optimization:</strong> Beta-blockers (Atenolol/Metoprolol) and ACE Inhibitors/ARBs to lower myocardial oxygen demand and control hypertension.</li>
        <li><strong>Nitrate Therapy:</strong> Sublingual Nitroglycerin for acute angina symptom relief.</li>
      </ul>

      <h3>Complications & Prevention</h3>
      <p>Untreated CAD can progress to acute myocardial infarction (heart attack), heart failure, and life-threatening arrhythmias. Daily brisk walking, low-sodium Mediterranean diet, smoking cessation, and strict HbA1c/BP control are critical for long-term survival.</p>
    `
  },

  "heart-failure": {
    name: "Heart Failure Management",
    content: `
      <p><strong>Heart Failure (Congestive Heart Failure - CHF)</strong> is a chronic, progressive cardiovascular condition in which the heart muscle is structurally or functionally unable to pump sufficient blood to satisfy the body's systemic oxygen and metabolic demands. Expert diagnostic evaluation and evidence-based medical therapy are provided by <strong>Dr. Sai Sekhar Pyla</strong> at <strong>Trinetra Medicals, Visakhapatnam</strong>.</p>
      
      <h3>Types of Heart Failure</h3>
      <ul>
        <li><strong>HFrEF (Heart Failure with Reduced Ejection Fraction):</strong> Systolic failure where LVEF is &le; 40%, meaning the heart pump is weakened.</li>
        <li><strong>HFpEF (Heart Failure with Preserved Ejection Fraction):</strong> Diastolic failure where LVEF is &ge; 50%, but heart chambers are stiff and unable to relax and fill properly.</li>
      </ul>

      <h3>Causes & Risk Factors</h3>
      <ul>
        <li>Prior Myocardial Infarction (Heart Attack) causing permanent cardiac scar tissue.</li>
        <li>Long-standing uncontrolled Hypertension (High Blood Pressure).</li>
        <li>Diabetic Cardiomyopathy and chronic metabolic dysfunction.</li>
        <li>Valvular heart disease (aortic stenosis, mitral regurgitation) and viral myocarditis.</li>
      </ul>

      <h3>Symptoms & Clinical Signs</h3>
      <ul>
        <li><strong>Dyspnea (Shortness of Breath):</strong> Exertional dyspnea progressing to Orthopnea (inability to breathe while lying flat) and Paroxysmal Nocturnal Dyspnea (waking up gasping for air).</li>
        <li><strong>Peripheral & Visceral Edema:</strong> Swelling in feet, ankles, shins, and abdomen (ascites) due to fluid retention.</li>
        <li><strong>Persistent Cough:</strong> Pink, frothy sputum accompanying acute pulmonary congestion.</li>
        <li><strong>Severe Fatigue & Rapid Weight Gain:</strong> Sudden weight increase of 1–2 kg over 48 hours from fluid buildup.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>NT-proBNP / BNP Blood Test:</strong> Key cardiac biomarker confirming elevated ventricular stretch and heart failure severity.</li>
        <li><strong>2D Echocardiogram (ECHO):</strong> Quantifies LVEF, ventricular volumes, diastolic filling pressures, and valve status.</li>
        <li><strong>Chest X-ray:</strong> Visualizes cardiomegaly (enlarged heart) and pulmonary venous congestion / Kerley B lines.</li>
        <li><strong>Renal & Electrolyte Panel:</strong> Monitors serum creatinine, BUN, sodium, and potassium levels.</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <ul>
        <li><strong>GDMT (Guideline-Directed Medical Therapy):</strong>
          <ul>
            <li><em>ARNI (Sacubitril/Valsartan) or ACEi/ARB:</em> Reduces cardiac strain and mortality.</li>
            <li><em>Beta-Blockers (Carvedilol, Bisoprolol, Metoprolol Succinate):</em> Blunts sympathetic overactivity.</li>
            <li><em>MRA (Spironolactone / Eplerenone):</em> Aldosterone receptor antagonist reducing cardiac fibrosis.</li>
            <li><em>SGLT2 Inhibitors (Dapagliflozin / Empagliflozin):</em> Significantly reduces heart failure hospitalizations.</li>
          </ul>
        </li>
        <li><strong>Diuretic Therapy:</strong> Loop diuretics (Furosemide / Torsemide) to relieve pulmonary congestion and edema.</li>
        <li><strong>Fluid & Sodium Restriction:</strong> Strict dietary salt limitation (&lt; 2g/day) and daily morning weight tracking.</li>
      </ul>
    `
  },

  "allergies": {
    name: "Allergies & Immunological Care",
    content: `
      <p><strong>Allergies</strong> are hypersensitive immune responses triggered when the body's immune system overreacts to non-harmful environmental substances (allergens) by producing IgE antibodies and releasing histamine from mast cells. Comprehensive diagnostic assessment and relief protocols are offered by <strong>Dr. Sai Sekhar Pyla</strong> in <strong>Muralinagar, Visakhapatnam</strong>.</p>
      
      <h3>Types of Allergic Conditions</h3>
      <ul>
        <li><strong>Allergic Rhinitis ("Hay Fever"):</strong> Seasonal or perennial inflammation of nasal mucosa triggered by pollen, dust mites, mold, or pet dander.</li>
        <li><strong>Cutaneous Allergies:</strong> Urticaria (hives), angioedema (facial/lip swelling), contact dermatitis, and atopic eczema.</li>
        <li><strong>Food & Drug Hypersensitivity:</strong> Acute allergic reactions to peanuts, shellfish, milk, penicillin, or NSAIDs.</li>
        <li><strong>Allergic Asthma:</strong> Airway bronchospasm and wheezing triggered by inhaled environmental allergens.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Frequent sneezing, clear watery nasal discharge, and nasal congestion.</li>
        <li>Itchy red eyes (allergic conjunctivitis), throat irritation, and persistent dry cough.</li>
        <li>Pruritic raised skin wheals (hives) or painful subcutaneous swelling (angioedema).</li>
        <li>Gastrointestinal symptoms (nausea, abdominal cramps, diarrhea) in food allergies.</li>
        <li><strong>Anaphylaxis (Severe Medical Emergency):</strong> Sudden throat tightness, difficulty breathing, dizziness, rapid drop in BP, and collapse.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Serum Total IgE & Specific IgE Tests:</strong> Measures systemic allergic antibody levels.</li>
        <li><strong>Skin Prick Testing (SPT):</strong> Identifies specific environmental or dietary allergen sensitivity.</li>
        <li><strong>Complete Blood Count (CBC):</strong> Evaluates peripheral blood eosinophilia.</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <ul>
        <li><strong>Second-Generation Antihistamines:</strong> Non-drowsy oral H1 blockers (Cetirizine, Levocetirizine, Fexofenadine, Bilastine).</li>
        <li><strong>Intranasal Corticosteroid Sprays:</strong> Fluticasone or Mometasone for persistent allergic rhinitis.</li>
        <li><strong>Leukotriene Receptor Antagonists:</strong> Montelukast for combined rhinitis and allergic asthma.</li>
        <li><strong>Allergen Avoidance Counseling:</strong> Dust mite covers, HEPA air filtration, and dietary elimination.</li>
      </ul>
    `
  },

  "substance-abuse": {
    name: "Substance Abuse & Addiction Recovery",
    content: `
      <p><strong>Substance Abuse & Addiction Management</strong> involves comprehensive clinical detoxification, organ wellness protection, medical stabilization, and lifestyle restructuring for individuals struggling with harmful dependency on alcohol, nicotine, prescription sedatives, or narcotics. Confidential medical consultation is conducted by <strong>Dr. Sai Sekhar Pyla</strong> at <strong>Trinetra Medicals, Visakhapatnam</strong>.</p>
      
      <h3>Substances Commonly Addressed</h3>
      <ul>
        <li><strong>Alcohol Use Disorder (AUD):</strong> Chronic heavy alcohol intake leading to liver toxicity, gastritis, and dependency.</li>
        <li><strong>Nicotine & Tobacco Addiction:</strong> Smoking or chewing tobacco causing respiratory, vascular, and oncological damage.</li>
        <li><strong>Prescription Drug Dependency:</strong> Overuse of benzodiazepines, sleeping pills, or opioid analgesics.</li>
      </ul>

      <h3>Symptoms & Health Risks</h3>
      <ul>
        <li>Physical craving, tolerance (requiring higher doses for effect), and loss of control over usage.</li>
        <li><strong>Withdrawal Symptoms:</strong> Hand tremors, diaphoresis (sweating), tachycardia, severe anxiety, nausea, or delirium tremens (in severe alcohol withdrawal).</li>
        <li><strong>Systemic Complications:</strong> Fatty liver disease, alcoholic hepatitis, liver cirrhosis, hypertension, cardiomyopathy, and gastrointestinal bleeding.</li>
      </ul>

      <h3>Clinical Management Protocol</h3>
      <ul>
        <li><strong>Supervised Medical Detoxification:</strong> Safe, symptom-targeted tapering using long-acting benzodiazepines, anti-emetics, and neuro-protective medications.</li>
        <li><strong>Organ Function Screening:</strong> Comprehensive Liver Function Tests (LFT: SGOT, SGPT, Bilirubin, GGT), Complete Blood Count, Renal Panel, and Abdominal Ultrasound.</li>
        <li><strong>Nutritional & Vitamin Support:</strong> High-dose Parenteral/Oral B-Complex (Thiamine / Vitamin B1) supplementation to prevent Wernicke-Korsakoff encephalopathy.</li>
        <li><strong>Relapse Prevention & Counseling:</strong> Anti-craving medications (Acamprosate, Naltrexone, Baclofen) combined with behavioral counseling.</li>
      </ul>
    `
  },

  "insomnia": {
    name: "Insomnia & Sleep Disorders",
    content: `
      <p><strong>Insomnia</strong> is a common neurological and metabolic sleep disorder characterized by persistent dissatisfaction with sleep quantity or quality, encompassing difficulty initiating sleep, maintaining sleep, or experiencing early morning awakenings with daytime impairment. Dedicated diagnostic and clinical sleep management is provided by <strong>Dr. Sai Sekhar Pyla</strong> in <strong>Visakhapatnam</strong>.</p>
      
      <h3>Causes & Contributing Factors</h3>
      <ul>
        <li><strong>Psychological Stress & Anxiety:</strong> Elevated evening cortisol levels, racing thoughts, and depressive disorders.</li>
        <li><strong>Medical Co-morbidities:</strong> Chronic pain, acid reflux (GERD), nocturnal polyuria, asthma, or diabetic neuropathy.</li>
        <li><strong>Circadian Rhythm Disruptions:</strong> Shift work, jet lag, irregular sleep-wake schedules, and excessive blue light exposure from screens before bed.</li>
        <li><strong>Substance Interferences:</strong> Late-day caffeine, alcohol nightcaps, nicotine, or stimulant medications.</li>
      </ul>

      <h3>Symptoms & Impact</h3>
      <ul>
        <li>Taking over 30 minutes to fall asleep at night (onset insomnia).</li>
        <li>Frequent night-time waking with inability to fall back asleep (maintenance insomnia).</li>
        <li>Daytime fatigue, irritability, difficulty concentrating, memory lapses, and reduced work productivity.</li>
        <li>Increased risk of hypertension, weight gain, impaired glucose tolerance, and weakened immunity.</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <ul>
        <li><strong>Cognitive Behavioral Therapy for Insomnia (CBT-I):</strong> First-line gold-standard non-pharmacological treatment focusing on stimulus control and sleep restriction.</li>
        <li><strong>Strict Sleep Hygiene Guidelines:</strong> Maintaining fixed wake-up times, keeping the bedroom dark and cool, and eliminating electronics 1 hour before sleep.</li>
        <li><strong>Underlying Medical Optimization:</strong> Treating nocturnal pain, GERD, or sleep apnea symptoms.</li>
        <li><strong>Judicious Short-Term Pharmacotherapy:</strong> Non-benzodiazepine hypnotics or melatonin receptor agonists prescribed strictly under medical supervision.</li>
      </ul>
    `
  },

  "adult-vaccination": {
    name: "Adult Immunization & Vaccines",
    content: `
      <p><strong>Adult Vaccination (Immunization)</strong> is an essential branch of preventative internal medicine designed to protect adults, senior citizens, and patients with chronic illnesses against vaccine-preventable infectious diseases. Preventative adult vaccine consultation and administration are provided by <strong>Dr. Sai Sekhar Pyla</strong> at <strong>Trinetra Medicals, Muralinagar, Visakhapatnam</strong>.</p>
      
      <h3>Why Adult Vaccination is Vital</h3>
      <ul>
        <li>Childhood immunity wanes over time, requiring adult booster doses (e.g., Tetanus & Diphtheria).</li>
        <li>Patients with Diabetes, Heart Failure, COPD, or Asthma face significantly higher risks of severe pneumococcal and influenza complications.</li>
        <li>Protects elderly individuals (aged 60+) against invasive infections and hospitalization.</li>
      </ul>

      <h3>Key Recommended Adult Vaccines</h3>
      <div style="overflow-x: auto; margin: 16px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: var(--primary-light, #f0fdf4); border-bottom: 2px solid var(--primary);">
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Vaccine</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Target Disease</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Recommended Audience & Schedule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Influenza (Flu) Vaccine</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Seasonal Flu & Respiratory Complications</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Annual single dose (especially for diabetics, seniors, and healthcare workers).</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Pneumococcal (PCV13 / PPSV23)</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Pneumonia, Meningitis, & Bacteremia</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Adults 50+, or younger adults with Diabetes, Asthma, or CKD.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Hepatitis B Vaccine</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Hepatitis B Liver Infection & Cirrhosis</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">3-dose series (0, 1, 6 months) for all non-immune adults.</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Tdap / Td Booster</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Tetanus, Diphtheria, & Pertussis</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Single Tdap dose followed by Td booster every 10 years.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Shingles (Herpes Zoster)</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">Shingles & Post-Herpetic Neuralgia</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">2-dose series for adults aged 50 and above.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  "connective-tissue-diseases": {
    name: "Connective Tissue Diseases",
    content: `
      <p><strong>Connective Tissue Diseases (CTD)</strong> are a complex group of autoimmune inflammatory conditions targeting collagen, elastin, and structural extracellular matrix tissues across joints, skin, blood vessels, lungs, and internal organs. Expert diagnostic evaluation and long-term care are managed by <strong>Dr. Sai Sekhar Pyla</strong> in <strong>Visakhapatnam</strong>.</p>
      
      <h3>Major Connective Tissue Disorders</h3>
      <ul>
        <li><strong>Systemic Lupus Erythematosus (SLE):</strong> Multisystem autoimmune disease affecting joints, skin, kidneys (lupus nephritis), and blood cells.</li>
        <li><strong>Systemic Sclerosis (Scleroderma):</strong> Characterized by abnormal collagen accumulation causing skin thickening and vascular sclerosis.</li>
        <li><strong>Sjögren's Syndrome:</strong> Autoimmune destruction of exocrine lacrimal and salivary glands leading to severe dry eyes and dry mouth.</li>
        <li><strong>Mixed Connective Tissue Disease (MCTD) & Polymyositis:</strong> Overlapping clinical features of Lupus, Scleroderma, and muscle inflammation.</li>
      </ul>

      <h3>Symptoms</h3>
      <ul>
        <li>Symmetrical joint pain, swelling, and morning stiffness.</li>
        <li><strong>Raynaud's Phenomenon:</strong> Fingers turning white, blue, then red upon exposure to cold temperatures.</li>
        <li>Malar "butterfly" facial rash across nose and cheeks (classic in SLE).</li>
        <li>Unexplained prolonged low-grade fever, extreme fatigue, and hair loss.</li>
        <li>Shortness of breath or dry cough due to Interstitial Lung Disease (ILD).</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Antinuclear Antibody (ANA) Test:</strong> Primary sensitive screening test for connective tissue disorders.</li>
        <li><strong>Specific Autoantibody Panels:</strong> Anti-dsDNA, Anti-Smith, Anti-Ro/SSA, Anti-La/SSB, Anti-Scl-70, and Anti-U1 RNP.</li>
        <li><strong>Inflammatory Markers & Complement Levels:</strong> ESR, C-Reactive Protein (CRP), C3, and C4 complement levels.</li>
      </ul>

      <h3>Treatment & Clinical Management</h3>
      <ul>
        <li><strong>DMARDs (Disease-Modifying Antirheumatic Drugs):</strong> Hydroxychloroquine (HCQ), Methotrexate, or Azathioprine to suppress disease activity.</li>
        <li><strong>Corticosteroid Flare Management:</strong> Judicious low-dose oral steroids for acute inflammatory suppression.</li>
        <li><strong>Organ Protection Screening:</strong> Regular urinalysis for proteinuria, renal function panels, and pulmonary function tests.</li>
      </ul>
    `
  },

  "cancer-surgery": {
    name: "Cancer Surgery Pre & Post Care",
    content: `
      <p><strong>Cancer Surgery Pre & Post-Operative Care</strong> encompasses specialized internal medicine consultation, perioperative risk clearance, nutritional optimization, and post-surgical recovery monitoring for oncology patients undergoing surgical tumor resection. Physician management is provided by <strong>Dr. Sai Sekhar Pyla</strong> at <strong>Trinetra Medicals, Visakhapatnam</strong>.</p>
      
      <h3>Pre-Operative Medical Clearance</h3>
      <ul>
        <li><strong>Cardiopulmonary Risk Assessment:</strong> Evaluating cardiac ejection fraction (ECHO), ECG, and lung function (PFT/Spirometry) prior to anesthesia.</li>
        <li><strong>Metabolic & Glycemic Optimization:</strong> Achieving stable blood sugar levels in diabetic patients to prevent wound breakdown and surgical site infections.</li>
        <li><strong>Correction of Anemia & Coagulopathies:</strong> Pre-surgical blood transfusions, iron therapy, and antiplatelet/anticoagulant bridging management.</li>
      </ul>

      <h3>Post-Operative Clinical Recovery</h3>
      <ul>
        <li><strong>Wound Healing & Infection Control:</strong> Monitoring surgical incisions for infection and managing postoperative fever.</li>
        <li><strong>Thromboembolism Prophylaxis:</strong> Low-Molecular-Weight Heparin (LMWH) and compression therapy to prevent Deep Vein Thrombosis (DVT) and Pulmonary Embolism.</li>
        <li><strong>Post-Surgical Pain & Electrolyte Management:</strong> Balancing intravenous fluids, serum potassium, sodium, and pain relief therapy.</li>
        <li><strong>Nutritional Rehabilitation:</strong> Early enteral nutrition and dietary protein enrichment to aid rapid tissue repair.</li>
      </ul>
    `
  },

  "routine-health-checkups": {
    name: "Routine Executive Health Checkups",
    content: `
      <p><strong>Routine Executive Health Checkups & Preventative Screenings</strong> are structured diagnostic evaluations designed to identify asymptomatic early-stage metabolic, cardiac, renal, and endocrine disorders before clinical symptoms emerge. Comprehensive physician checkups are conducted by <strong>Dr. Sai Sekhar Pyla</strong> (<strong>MD General Medicine</strong>) at <strong>Trinetra Medicals, Muralinagar, Visakhapatnam</strong>.</p>
      
      <h3>Why Preventative Health Checkups are Essential</h3>
      <ul>
        <li>Early detection of silent conditions such as Prediabetes, High Blood Pressure, Fatty Liver, and High Cholesterol.</li>
        <li>Establishes baseline health markers to track yearly physiological changes.</li>
        <li>Provides personalized lifestyle, dietary, and exercise recommendations tailored to your age and family history.</li>
      </ul>

      <h3>Comprehensive Checkup Package Includes</h3>
      <ul>
        <li><strong>Diabetes & Metabolic Panel:</strong> Fasting Blood Glucose, Postprandial Blood Sugar, and HbA1c (Glycated Hemoglobin).</li>
        <li><strong>Lipid & Cardiac Risk Profile:</strong> Total Cholesterol, Triglycerides, HDL, LDL, VLDL, and 12-Lead ECG.</li>
        <li><strong>Kidney Function Test (KFT):</strong> Serum Creatinine, Blood Urea Nitrogen (BUN), Serum Uric Acid, and Urinalysis.</li>
        <li><strong>Liver Function Test (LFT):</strong> SGOT, SGPT, Alkaline Phosphatase, Bilirubin, and Total Protein.</li>
        <li><strong>Complete Hemogram (CBC):</strong> Hemoglobin, RBC count, White Blood Cell Differential, and Platelet Count.</li>
        <li><strong>Thyroid Screening:</strong> TSH (Thyroid Stimulating Hormone) test.</li>
        <li><strong>Detailed Physician Consultation:</strong> Physical examination, blood pressure check, BMI calculation, and individualized treatment roadmap by Dr. Sai Sekhar Pyla.</li>
      </ul>
    `
  },

  "vitamin-deficiency": {
    name: "Vitamin & Mineral Deficiency Management",
    content: `
      <p><strong>Vitamin & Mineral Deficiencies</strong> occur when the body lacks essential micronutrients required for enzyme function, bone mineral density, neurological conduction, and hematopoiesis. Accurate lab diagnosis and therapeutic supplementation are provided by <strong>Dr. Sai Sekhar Pyla</strong> in <strong>Visakhapatnam</strong>.</p>
      
      <h3>Common Deficiencies & Clinical Symptoms</h3>
      <ul>
        <li><strong>Vitamin D3 Deficiency:</strong> Causes generalized bone pain, muscle weakness, frequent infections, osteopenia, and increased fracture risk. Extremely common due to indoor sedentary lifestyles.</li>
        <li><strong>Vitamin B12 Deficiency:</strong> Leads to Megaloblastic Anemia, peripheral nerve damage (numbness, tingling in feet/hands), memory impairment, glossitis (swollen smooth tongue), and chronic fatigue.</li>
        <li><strong>Iron Deficiency Anemia:</strong> Results in pale skin, extreme exhaustion, shortness of breath, brittle nails (koilonychia), and cold hands/feet.</li>
        <li><strong>Calcium & Magnesium Deficiencies:</strong> Causes muscle cramps, spasms, bone loss (osteoporosis), and cardiac irritability.</li>
      </ul>

      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Serum 25-Hydroxy Vitamin D Test:</strong> Defines deficient (&lt; 20 ng/mL), insufficient (20–29 ng/mL), or optimal (&gt; 30 ng/mL) levels.</li>
        <li><strong>Serum Vitamin B12 & Folate Level:</strong> Evaluates cobalamin status.</li>
        <li><strong>Complete Blood Count & Ferritin Panel:</strong> Measures Serum Ferritin, Total Iron Binding Capacity (TIBC), and Transferrin Saturation.</li>
      </ul>

      <h3>Treatment & Management Protocol</h3>
      <ul>
        <li><strong>Therapeutic Vitamin D3 Replacement:</strong> High-dose Cholecalciferol (60,000 IU weekly) for 8 weeks followed by monthly maintenance.</li>
        <li><strong>B12 Replacement Therapy:</strong> Intramuscular Methylcobalamin injections or high-dose oral sublingual tablets.</li>
        <li><strong>Oral Iron Therapy:</strong> Ferrous ascorbate / elemental iron supplements combined with Vitamin C for optimal intestinal absorption.</li>
        <li><strong>Dietary Enrichment:</strong> Nutritional guidance on leafy greens, dairy, nuts, seeds, and fortified foods.</li>
      </ul>
    `
  },

  "diet-lifestyle-modifications": {
    name: "Diet & Lifestyle Modifications",
    content: `
      <p><strong>Therapeutic Diet & Lifestyle Modifications</strong> form the cornerstone of primary prevention and non-pharmacological management for chronic metabolic disorders including Diabetes Mellitus, Hypertension, Dyslipidemia, Obesity, and Non-Alcoholic Fatty Liver Disease (NAFLD). Medical guidance is customized by <strong>Dr. Sai Sekhar Pyla</strong> at <strong>Trinetra Medicals, Visakhapatnam</strong>.</p>
      
      <h3>Key Clinical Focus Areas</h3>
      <ul>
        <li><strong>Glycemic Index Meal Planning for Diabetics:</strong> Transitioning to complex carbohydrates, high-fiber legumes, and whole grains to eliminate postprandial glucose spikes.</li>
        <li><strong>DASH Diet for Hypertensive Patients:</strong> Sodium restriction (&lt; 2,000 mg/day), increased potassium-rich foods, and elimination of processed foods.</li>
        <li><strong>Therapeutic Weight Loss Protocols:</strong> Achieving 5–10% body weight reduction to reverse insulin resistance and lower liver enzymes.</li>
        <li><strong>Cardiovascular Exercise Schedule:</strong> Tailored recommendation of 150 minutes per week of moderate-intensity aerobic exercise (brisk walking, cycling) and progressive resistance training.</li>
        <li><strong>Sleep Architecture & Stress Reduction:</strong> Regulating sleep cycles and reducing stress-induced cortisol release.</li>
      </ul>
    `
  },

  "dyslipidemia": {
    name: "Dyslipidemia & Lipid Management",
    content: `
      <p><strong>Dyslipidemia</strong> is a major metabolic condition characterized by abnormal concentrations of serum lipids, including elevated Low-Density Lipoprotein Cholesterol (LDL-C), high Triglycerides, or low High-Density Lipoprotein Cholesterol (HDL-C). It is a primary driver of coronary plaque accumulation and ischemic stroke. Lipid evaluation and therapy are managed by <strong>Dr. Sai Sekhar Pyla</strong> in <strong>Muralinagar, Visakhapatnam</strong>.</p>
      
      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Dietary Factors:</strong> High intake of saturated fats, trans-fats, fried foods, and refined sugars.</li>
        <li><strong>Metabolic & Genetic Conditions:</strong> Familial Hypercholesterolemia, Type 2 Diabetes, Hypothyroidism, and Chronic Kidney Disease.</li>
        <li><strong>Sedentary Lifestyle & Obesity:</strong> Lack of exercise lowers protective HDL cholesterol.</li>
      </ul>

      <h3>Diagnostic Target Thresholds</h3>
      <div style="overflow-x: auto; margin: 16px 0;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
          <thead>
            <tr style="background-color: var(--primary-light, #f0fdf4); border-bottom: 2px solid var(--primary);">
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Lipid Parameter</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">Optimal Target Level</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0;">High / Borderline Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>LDL Cholesterol ("Bad")</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&lt; 100 mg/dL (&lt; 70 mg/dL in high risk)</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&ge; 160–189 mg/dL</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>Serum Triglycerides</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&lt; 150 mg/dL</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">200–499 mg/dL</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><strong>HDL Cholesterol ("Good")</strong></td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&gt; 40 mg/dL (Men) / &gt; 50 mg/dL (Women)</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">&lt; 40 mg/dL</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Treatment Strategy</h3>
      <ul>
        <li><strong>Statin Pharmacotherapy:</strong> HMG-CoA reductase inhibitors (Atorvastatin / Rosuvastatin) to reduce LDL-C synthesis and stabilize vascular endothelial lining.</li>
        <li><strong>Ezetimibe / Fibrate Add-on:</strong> Indicated for severe hypertriglyceridemia (&gt; 500 mg/dL) to prevent acute pancreatitis.</li>
        <li><strong>Nutritional & Lifestyle Interventions:</strong> Elimination of trans-fats, increased soluble dietary fiber, and weight management.</li>
      </ul>
    `
  },

  "septic-syndrome": {
    name: "Septic Syndrome & Severe Infection Care",
    content: `
      <p><strong>Septic Syndrome (Sepsis)</strong> is a life-threatening medical emergency caused by a dysregulated, toxic host immune response to a severe bacterial, viral, or fungal infection, leading to acute tissue inflammation, microvascular thrombosis, and organ failure. ICU and critical care physician management is directed by <strong>Dr. Sai Sekhar Pyla</strong> (<strong>MD General Medicine</strong>) in <strong>Visakhapatnam</strong>.</p>
      
      <h3>Common Infection Sources</h3>
      <ul>
        <li>Severe Pneumonia and lower respiratory tract infections.</li>
        <li>Complicated Urinary Tract Infections (Pyelonephritis / Urosepsis).</li>
        <li>Abdominal infections (peritonitis, acute cholangitis, severe gastroenteritis).</li>
        <li>Skin, soft tissue, and bloodstream infections (bacteremia).</li>
      </ul>

      <h3>Early Warning Signs (qSOFA Criteria)</h3>
      <ul>
        <li>High fever spiking &gt; 101°F (38.3°C) or Hypothermia (&lt; 96.8°F / 36°C) with severe rigors.</li>
        <li>Tachycardia (heart rate &gt; 90 beats/min) and Tachypnea (respiratory rate &gt; 22 breaths/min).</li>
        <li>Hypotension (Systolic BP &lt; 100 mmHg).</li>
        <li>Altered mental status, confusion, lethargy, or extreme prostration.</li>
        <li>Oliguria (significantly decreased urine output).</li>
      </ul>

      <h3>Clinical Emergency Protocol</h3>
      <ul>
        <li><strong>Rapid Resuscitation:</strong> Immediate administration of IV isotonic crystalloid fluids.</li>
        <li><strong>Empiric Broad-Spectrum Antibiotics:</strong> Administered within the first hour of clinical suspicion after blood culture collection.</li>
        <li><strong>Lactate Monitoring & Lab Panels:</strong> Serial blood lactate levels, CBC, renal/liver function, and coagulation parameters (PT/INR).</li>
        <li><strong>Inotropic & Vasopressor Support:</strong> Norepinephrine infusion for persistent septic shock.</li>
      </ul>
    `
  },

  "geriatric-care": {
    name: "Geriatric Medicine & Elderly Care",
    content: `
      <p><strong>Geriatric Medicine</strong> is a specialized branch of internal medicine focused on promoting health, managing complex multi-system co-morbidities, and preventing disability in senior citizens (adults aged 60 and above). Compassionate, comprehensive elderly care is provided by <strong>Dr. Sai Sekhar Pyla</strong> at <strong>Trinetra Medicals, Muralinagar, Visakhapatnam</strong>.</p>
      
      <h3>Core Geriatric Focus Areas</h3>
      <ul>
        <li><strong>Polypharmacy Optimization:</strong> Systematic review of all ongoing medications to eliminate unnecessary drugs, prevent adverse drug-drug interactions, and adjust dosages for renal clearance.</li>
        <li><strong>Chronic Multi-Morbidities Management:</strong> Coordinated management for concurrent Diabetes, Hypertension, Heart Failure, Osteoarthritis, and Chronic Kidney Disease.</li>
        <li><strong>Fall Prevention & Bone Density:</strong> Osteoporosis evaluation (DEXA scan), Vitamin D/Calcium optimization, joint stabilization, and mobility support.</li>
        <li><strong>Cognitive & Memory Wellness:</strong> Early screening for vascular dementia, Alzheimer's disease, and depression.</li>
        <li><strong>Preventative Senior Vaccination:</strong> Administering annual Flu shots, Pneumococcal vaccines, and Shingles protection.</li>
      </ul>
    `
  },

  "kidney-stones": {
    name: "Kidney Stones (Nephrolithiasis)",
    content: `
      <p><strong>Kidney Stones (Nephrolithiasis)</strong> are hard mineral and salt deposits that form inside the kidneys. They develop when urine becomes concentrated, allowing minerals to crystallize and stick together.</p>
      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Dehydration:</strong> Inadequate daily water intake leads to highly concentrated urine.</li>
        <li><strong>Dietary Factors:</strong> High sodium, animal protein, and oxalate-rich foods (spinach, nuts, chocolate).</li>
        <li><strong>Metabolic Factors:</strong> Hypercalciuria, hyperuricemia (gout), and hyperparathyroidism.</li>
        <li><strong>Family History & Obesity:</strong> Genetic predisposition and high BMI elevate stone formation risk.</li>
      </ul>
      <h3>Symptoms</h3>
      <ul>
        <li>Severe, sharp pain in the side and back, below the ribs (flank pain).</li>
        <li>Pain radiating to the lower abdomen and groin (renal colic).</li>
        <li>Painful or burning sensation during urination (dysuria).</li>
        <li>Pink, red, or brown urine (hematuria).</li>
        <li>Nausea, vomiting, and persistent urge to urinate.</li>
      </ul>
      <h3>Diagnostic Workup</h3>
      <ul>
        <li><strong>Non-Contrast CT Scan (KUB):</strong> Gold standard for stone size, location, and density.</li>
        <li><strong>Renal Ultrasound:</strong> Safe imaging for obstruction and hydronephrosis evaluation.</li>
        <li><strong>Urinalysis & Blood Panel:</strong> Checks for infection, blood, uric acid, and calcium levels.</li>
      </ul>
      <h3>Treatment & Management</h3>
      <ul>
        <li><strong>Hydration Therapy:</strong> Drinking 2.5–3 liters of water daily to facilitate natural passage.</li>
        <li><strong>Medical Expulsive Therapy (MET):</strong> Alpha-blockers (e.g., Tamsulosin) to relax ureteral muscles.</li>
        <li><strong>Pain Relief:</strong> Doctor-prescribed analgesics for acute renal colic management.</li>
        <li><strong>Dietary Prevention:</strong> Reduced sodium intake, controlled oxalate consumption, and adequate dietary calcium.</li>
      </ul>
    `
  },

  "hypertension-htn": {
    name: "Hypertension (High Blood Pressure)",
    content: `
      <p><strong>Hypertension (High Blood Pressure)</strong> is a chronic condition in which the long-term force of blood against arterial walls is elevated enough to eventually cause health problems, such as cardiovascular disease and stroke.</p>
      <h3>Blood Pressure Classification Thresholds</h3>
      <ul>
        <li><strong>Normal BP:</strong> Systolic &lt; 120 mmHg and Diastolic &lt; 80 mmHg.</li>
        <li><strong>Elevated BP:</strong> Systolic 120–129 mmHg and Diastolic &lt; 80 mmHg.</li>
        <li><strong>Stage 1 Hypertension:</strong> Systolic 130–139 mmHg or Diastolic 80–89 mmHg.</li>
        <li><strong>Stage 2 Hypertension:</strong> Systolic &ge; 140 mmHg or Diastolic &ge; 90 mmHg.</li>
        <li><strong>Hypertensive Crisis:</strong> Systolic &gt; 180 mmHg and/or Diastolic &gt; 120 mmHg (Requires immediate emergency care).</li>
      </ul>
      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Primary (Essential) Hypertension:</strong> Gradual development with age, genetic factors, high sodium intake, physical inactivity, obesity, and chronic stress.</li>
        <li><strong>Secondary Hypertension:</strong> Underlying conditions such as renal artery stenosis, chronic kidney disease, obstructive sleep apnea, or thyroid disorders.</li>
      </ul>
      <h3>Symptoms</h3>
      <p>Hypertension is often called the <em>"silent killer"</em> because it rarely produces early symptoms. Severe cases may present with:</p>
      <ul>
        <li>Morning occipital headaches and dizziness.</li>
        <li>Shortness of breath, chest tightness, or palpitations.</li>
        <li>Visual disturbances or epistaxis (nosebleeds).</li>
      </ul>
      <h3>Treatment Protocol</h3>
      <ul>
        <li><strong>Lifestyle Modifications (DASH Diet):</strong> Dietary Approaches to Stop Hypertension—low sodium (&lt; 2g/day), rich in fruits, vegetables, and potassium.</li>
        <li><strong>Antihypertensive Pharmacotherapy:</strong> ACE Inhibitors / ARBs, Calcium Channel Blockers (CCBs), and Thiazide Diuretics tailored to patient profile.</li>
        <li><strong>Target Blood Pressure:</strong> &lt; 130/80 mmHg for high-risk and diabetic patients.</li>
      </ul>
    `
  },

  "osteoarthritis": {
    name: "Osteoarthritis (Degenerative Joint Disease)",
    content: `
      <p><strong>Osteoarthritis</strong> is the most common form of arthritis, characterized by progressive breakdown of protective articular cartilage cushioning the ends of bones, most frequently affecting knees, hips, hands, and spine.</p>
      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Aging & Joint Wear-and-Tear:</strong> Cumulative cartilage degeneration over time.</li>
        <li><strong>Obesity:</strong> Excess weight increases mechanical stress on weight-bearing joints (knees & hips).</li>
        <li><strong>Prior Joint Injury:</strong> Previous ligament tears, fractures, or repetitive occupational joint stress.</li>
        <li><strong>Genetics & Bone Deformities:</strong> Inherited cartilage defects or joint malalignment.</li>
      </ul>
      <h3>Symptoms</h3>
      <ul>
        <li>Joint pain during or after movement.</li>
        <li>Joint stiffness noticeable upon awakening or after inactivity (lasting &lt; 30 minutes).</li>
        <li>Tenderness, loss of flexibility, and grating sensation (crepitus).</li>
        <li>Bony enlargements (Heberden's and Bouchard's nodes in finger joints).</li>
      </ul>
      <h3>Clinical Management</h3>
      <ul>
        <li><strong>Non-Pharmacological Therapy:</strong> Quadriceps strengthening exercises, low-impact swimming/walking, and weight loss.</li>
        <li><strong>Pharmacotherapy:</strong> Topical NSAIDs, oral analgesics, and chondroprotective supplements under physician direction.</li>
        <li><strong>Joint Preservation:</strong> Intra-articular hyaluronic acid or corticosteroid injections for acute flare-ups.</li>
      </ul>
    `
  },

  "asthma": {
    name: "Asthma Care & Respiratory Management",
    content: `
      <p><strong>Asthma</strong> is a chronic inflammatory disorder of the airways causing hyperresponsiveness, bronchospasm, mucosal swelling, and excess mucus production leading to variable airflow obstruction.</p>
      <h3>Common Triggers</h3>
      <ul>
        <li>Environmental allergens: Dust mites, pollen, mold, animal dander.</li>
        <li>Respiratory viral infections, cold air, and air pollution.</li>
        <li>Physical exercise, intense emotions, and chemical fumes.</li>
      </ul>
      <h3>Symptoms</h3>
      <ul>
        <li>Expiratory wheezing (whistling sound during breathing).</li>
        <li>Shortness of breath (dyspnea) and chest tightness.</li>
        <li>Persistent coughing, especially at night or early morning.</li>
      </ul>
      <h3>Diagnostic Evaluation</h3>
      <ul>
        <li><strong>Spirometry / Pulmonary Function Test (PFT):</strong> Demonstrates reversible airway obstruction post-bronchodilator.</li>
        <li><strong>Peak Expiratory Flow Rate (PEFR):</strong> Daily home monitoring of airflow capacity.</li>
      </ul>
      <h3>Treatment Strategy</h3>
      <ul>
        <li><strong>Controller Therapy:</strong> Daily Inhaled Corticosteroids (ICS) to suppress chronic airway inflammation.</li>
        <li><strong>Reliever Therapy:</strong> Short-Acting Beta Agonists (SABA) for rapid relief during acute attacks.</li>
        <li><strong>Asthma Action Plan:</strong> Trigger avoidance, technique check for inhalers, and allergen control.</li>
      </ul>
    `
  },

  "pneumonia": {
    name: "Pneumonia & Lower Respiratory Infection Care",
    content: `
      <p><strong>Pneumonia</strong> is an acute infection of the lung parenchyma causing inflammation in the air sacs (alveoli), which may fill with fluid or purulent exudate, compromising oxygen exchange.</p>
      <h3>Causes</h3>
      <ul>
        <li><strong>Bacterial:</strong> <em>Streptococcus pneumoniae</em> (most common), <em>Klebsiella pneumoniae, Haemophilus influenzae</em>.</li>
        <li><strong>Viral:</strong> Influenza virus, Respiratory Syncytial Virus (RSV), SARS-CoV-2.</li>
        <li><strong>Aspiration:</strong> Inhalation of food, liquid, or vomit into airways.</li>
      </ul>
      <h3>Symptoms</h3>
      <ul>
        <li>High fever with shaking chills and sweating.</li>
        <li>Productive cough with yellow, green, or rust-colored sputum.</li>
        <li>Pleuritic chest pain (sharp pain worsening with deep breaths or coughing).</li>
        <li>Shortness of breath, rapid shallow breathing, and low oxygen saturation.</li>
        <li>Confusion or altered mental state (especially in elderly patients).</li>
      </ul>
      <h3>Diagnosis & Treatment</h3>
      <ul>
        <li><strong>Chest X-ray:</strong> Visualizes lung infiltrates and consolidation.</li>
        <li><strong>Sputum & Blood Cultures:</strong> Identifies specific pathogen and antibiotic sensitivity.</li>
        <li><strong>Targeted Antibiotics:</strong> Empiric and culture-guided antibiotic therapy.</li>
        <li><strong>Supportive Care:</strong> Oxygen therapy, hydration, antipyretics, and chest physiotherapy.</li>
      </ul>
    `
  },

  "copd-chronic-obstructive-pulmonary-disease": {
    name: "COPD (Chronic Obstructive Pulmonary Disease)",
    content: `
      <p><strong>Chronic Obstructive Pulmonary Disease (COPD)</strong> is a progressive, irreversible lung disease characterized by long-term airflow limitation. It encompasses <em>Chronic Bronchitis</em> (long-term airway inflammation) and <em>Emphysema</em> (destruction of lung alveoli).</p>
      <h3>Causes & Risk Factors</h3>
      <ul>
        <li><strong>Tobacco Smoking:</strong> Primary cause of COPD worldwide.</li>
        <li><strong>Biomass Fuel & Air Pollution:</strong> Indoor exposure to wood/crop burning smoke in unventilated kitchens.</li>
        <li><strong>Occupational Dusts & Chemicals:</strong> Long-term exposure to industrial dust, silica, or chemical fumes.</li>
        <li><strong>Alpha-1 Antitrypsin Deficiency:</strong> Genetic disorder leading to early-onset emphysema.</li>
      </ul>
      <h3>Symptoms</h3>
      <ul>
        <li>Progressive exertional dyspnea (shortness of breath during daily activities).</li>
        <li>Chronic productive cough with daily sputum production.</li>
        <li>Frequent respiratory tract infections and wheezing.</li>
        <li>Fatigue, weight loss, and barrel chest deformity in advanced stages.</li>
      </ul>
      <h3>Diagnosis & Management Protocol</h3>
      <ul>
        <li><strong>Spirometry:</strong> Confirms persistent airflow limitation (post-bronchodilator FEV1/FVC &lt; 0.70).</li>
        <li><strong>Inhaled Bronchodilators:</strong> Long-Acting Muscarinic Antagonists (LAMA) and Long-Acting Beta Agonists (LABA).</li>
        <li><strong>Smoking Cessation:</strong> Single most effective intervention to stop disease progression.</li>
        <li><strong>Pulmonary Rehabilitation:</strong> Exercise training, breathing techniques, and nutritional guidance.</li>
        <li><strong>Preventative Vaccination:</strong> Annual Influenza and Pneumococcal vaccination to prevent severe exacerbations.</li>
      </ul>
    `
  }
};
