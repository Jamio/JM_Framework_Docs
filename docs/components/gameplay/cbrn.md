# CBRN

## Overview

CBRN is a configurable, lightweight threat system for adding chemical, biological and radiological hazards to an operation. It is designed to create an understandable gameplay loop rather than simulate every aspect of real-world contamination: players must detect a hazardous environment, use suitable protective equipment, recognise that exposure may have occurred, obtain a proper diagnosis and choose an appropriate treatment or decontamination method. The system integrates with ACE interactions and medical workflows while remaining usable without KAT.

Mission-makers build hazards from zones and source objects, select a threat family and subtype, define the protection level required, and control exposure strength, radius, persistence and visible particle preset. Chemical, biological and radiological agents have distinct treatment families and symptom descriptions. Biological agents can spread between nearby people, including configurable behaviour around PPE, while a custom-agent profile allows a mission to define its own transmission and treatment characteristics without adding another hard-coded subtype.

Players do not receive an explicit warning merely for crossing an invisible boundary. A watch-slot detector provides fluctuating readings when deliberately activated, and general status checks describe vague symptoms rather than revealing the exact agent. Qualified medics can use the CBRN bioassay to identify type, subtype, severity and treatment burden; completing an assay also improves the effectiveness of the correct medication. Untreated exposure can progress through subtle visual disturbance and pain into collapse, unconsciousness, vomiting and, where configured, death. Optional KAT compatibility adds appropriate consequences when KAT Chemical is loaded, with invasive injury types such as pneumothorax remaining separately controllable.

Decontamination is distinct from medical treatment. Personal kits and shower stations remove contamination from a person, while contaminated bodies, vehicles and containers can continue to spread exposure until wiped down, sealed with foam, placed in a lined container or secured in a CBRN body bag as appropriate. Zeus inspection and overlay tools make the hidden state manageable during testing and live direction without exposing diagnostic certainty to ordinary players.

<!-- IMAGE PLACEHOLDER: CBRN detector HUD beside a visible threat zone. -->

<!-- IMAGE PLACEHOLDER: Medic bioassay display and the ACE treatment actions. -->

## How to set up the component

Place one **[JMF] - CBRN > CBRN Settings** module. Add **CBRN Threat** modules for hazards, an optional **CBRN Custom Agent**, and **CBRN Decontamination Station** modules for fixed decon points.

## 3DEN Module Settings

### CBRN Settings

#### Core and protection

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable CBRN | Enabled | Master switch; threat modules remain inert when disabled. |
| Lethal at Maximum Exposure | Enabled | Kills a unit that reaches maximum exposure. |
| Maximum Exposure | `100` | Critical exposure value. |
| Breathing Air Duration | `1800` | Fresh seconds assigned to configured supplied-air backpacks. |
| Respirator Classnames | Vanilla respirators | Goggles classes providing PPE level 1. |
| CBRN Suit Classnames | Vanilla CBRN suits | Uniform classes used for level 2 with a respirator. |
| Breathing Apparatus Classnames | Vanilla SCBA packs | Backpack classes used for level 3 with respirator and suit. |
| Containment Kit Classname | `JMF_CBRN_ContainmentKit` | Item consumed by successful source containment. |

Classname lists accept commas, spaces or new lines. **Use inventory classnames, not display names.**{ .jmf-emphasis }

#### Detection and environmental visuals

| Attribute | Default | What it does |
| --- | --- | --- |
| Chemical/Biological Detector Item | `JMF_CBRN_Detector` | Watch-slot item for chemical and biological readings. |
| Radiological Detector Item | `JMF_CBRN_Detector` | Watch-slot item for radiological readings. |
| Audible Detector Feedback | Enabled | Enables detector sounds. |
| Detector Display Style | Compact Readout | Uses the original compact HUD or places the readings inside the handheld detector artwork. |
| Enable Threat Particles | Enabled | Global particle switch; individual threats may still choose None. |
| Particle View Distance | `350` | Local emitter creation range beyond the hazard area. |

#### Surface contamination

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Contaminated Objects | Disabled | Allows vehicles and containers inside a threat core to become mobile contamination sources. |
| Contaminated Object Radius | `3` | Exposure radius around a contaminated object. |
| Contaminated Object Exposure Rate | `0.08` | Exposure points per second before PPE. |
| Maximum Contaminated Objects | `64` | Global limit for automatically contaminated objects. |

#### Diagnosis, treatment and symptoms

| Attribute | Default | What it does |
| --- | --- | --- |
| Bioassay Improves Treatment | Enabled | Matching recent diagnosis increases correct treatment strength. |
| Bioassay Display Style | Field Analyser | Uses the physical analyser artwork or the original clean clinical report. |
| Bioassay Validity | `300` | Seconds before the indication expires. |
| Empirical Treatment Strength | `18` | Exposure removed by a correct undiagnosed treatment. |
| Bioassay-Guided Treatment Strength | `42` | Exposure removed with a current matching assay. |
| Safe Dose Threshold | `3` | Recent doses before medication burden becomes elevated. |
| Medication Burden Window | `600` | Rolling burden window in seconds. |
| Enable Physical Symptoms | Enabled | Enables staged effects without framework progression notifications. |
| Enable Visual Symptoms | Enabled | Adds mild distortion and the non-lethal critical vignette. |
| Enable ACE Medical Consequences | Enabled | Adds pain, vomiting, collapse and temporary unconsciousness. |

#### Automatic KAT Medical integration

These options take effect only when the matching KAT addon is loaded. No separate compatibility module is required.

| Attribute | Default | What it does |
| --- | --- | --- |
| Allow KAT Chemical Burns | Enabled | Advanced dermal exposure can create bandageable chemical-burn wounds. |
| Allow KAT Airway Complications | Enabled | Pulmonary exposure and vomiting can obstruct or occlude the airway. |
| Allow KAT Pneumothorax Injuries | Disabled | Pulmonary contamination can create pneumothorax injuries for groups using that part of KAT. |

#### Progression and transmission

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Advanced Progression | Enabled | Advanced untreated contamination worsens outside the source. |
| Advanced Threshold | `65%` | Beginning of advanced symptoms/self-progression. |
| Advanced Progression Rate | `0.05` | Exposure points gained per second. |
| Enable Player Transmission | Enabled | Allows biological person-to-person spread after incubation. |
| Incubation Time | `120` | Minimum seconds before contagion. |
| Contagious Threshold | `20%` | Biological load required to shed the agent. |
| Transmission Radius | `3` | Maximum carrier range in metres. |
| Transmission Rate | `0.06` | Close-range exposure points per second before protection. |
| Transmission Bypasses PPE | Disabled | Makes person-to-person spread ignore equipment; environmental PPE still works. |
| Enable Biological Disease Progression | Enabled | Established infections worsen without new environmental exposure. |
| Established Infection Threshold | `10%` | Load required for disease progression. |
| Biological Progression Rate | `0.025` | Exposure points gained per second. |
| Create Framework Diary Entry | Enabled | Adds a concise detector/PPE guide for players. |

### CBRN Custom Agent

Defines one mission-wide custom subtype inherited by threats set to **Custom Agent**.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Custom Agent Identity | Enable Custom Agent | Enabled | Registers the profile. |
| Custom Agent Identity | Diagnostic Name | Unidentified Agent | Exact name shown to medics and Zeus. |
| Custom Agent Identity | CBRN Family | Biological | Chemical, Biological or Radiological family. |
| Custom Agent Identity | Symptom Profile | Viral / systemic | Reuses a built-in physical/subjective symptom family. |
| Custom Transmission | Person-to-Person Transmission | Enabled | Allows carrier spread. |
| Custom Transmission | Incubation / Threshold / Radius / Rate | `120` / `20` / `3` / `0.06` | Custom contagion timings. |
| Custom Transmission | Bypass PPE for This Agent | Disabled | Overrides the global transmission PPE policy. |
| Custom Disease Progression | Threshold / Rate | `10` / `0.025` | Established custom-agent progression. |
| Custom Treatment | Empirical / Bioassay-Guided Strength | `18` / `42` | Experimental Serum effectiveness. |

### CBRN Threat

Place the module at the centre of a positional hazard, or synchronize it to source objects.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Threat Identity | Threat ID | Empty | Optional stable script/Zeus identifier. |
| Threat Identity | Threat Type | Chemical | Chemical, Biological or Radiological detector family. |
| Threat Identity | Medical Subtype | Auto | Built-in subtype or the configured Custom Agent. |
| Threat Identity | Start Active | Enabled | Initial source state. |
| Area and Intensity | Threat Intensity | `2` | Detector strength and exposure multiplier. |
| Area and Intensity | Full-Strength Radius | `25` | Dense core radius. |
| Area and Intensity | Falloff Distance | `25` | Additional distance over which strength fades to zero. |
| Area and Intensity | Exposure Rate | `0.35` | Points per intensity level per second before PPE. |
| Environmental Visuals | Particle Preset | Family Default | None, chemical mist, biological aerosol or radiological dust. |
| Environmental Visuals | Particle Density | `1` | Visual multiplier from light to obscuring. |
| Required Protection | Required PPE Level | Level 1 | None effective, respirator, respirator+suit, or full supplied air. |
| Containment | Source Can Be Contained | Disabled | Adds progress actions to synchronized source objects. |
| Containment | Containment Duration | `12` | Progress time in seconds. |
| Containment | Contaminated Object Procedure | Automatic | Chooses wipes, expanding foam or lined recovery containers for objects contaminated by this source. Automatic uses hazmat recovery for bodies and wipes for other objects. |
| World Label | Show Source Label | Disabled | Optional hazard label. |
| World Label | Source Label / Distance | Type name / `20` | Label content and range. |

### CBRN Decontamination Station

Synchronize the module to one or more station objects.

| Attribute | Default | What it does |
| --- | --- | --- |
| Display Name | Decontamination Station | ACE action and label name. |
| Decontamination Duration | `12` | Progress time. |
| Show World Label | Enabled | Shows the station label. |
| Label Distance | `20` | Label draw range. |

Decontamination clears contamination state, contagion and symptom loops. It does not remove or alter the player's equipment.

The Personal Decontamination Kit is the portable equivalent of a station and is used through ACE Medical. Contact decontamination showers also play their shower effect and decontaminate eligible people in the active shower area.

## Diagnosis and treatment

Ordinary status checks show subjective symptoms. A qualified medic carrying `JMF_CBRN_DiagnosticKit` can perform a bioassay for exact family, subtype, severity and treatment burden. Built-in subtype treatments are:

| Family | Subtype | Treatment item |
| --- | --- | --- |
| Chemical | Dermal | Reactive Skin Decontamination Patch |
| Chemical | Pulmonary | Pulmonary Neutraliser |
| Chemical | Cholinergic | Nerve Agent Antidote |
| Biological | Bacterial | Broad-Spectrum Antibiotic |
| Biological | Viral | Broad-Spectrum Antiviral |
| Biological | Parasitic | Antiparasitic Agent |
| Biological | Fungal | Systemic Antifungal Agent |
| Radiological | Radioiodine | Potassium Iodide Tablets |
| Radiological | Caesium / thallium | Prussian Blue Capsules |
| Radiological | Actinide | Ca-DTPA Chelator |
| Custom | Custom Agent | Experimental Treatment Serum |

Treatment reduces contamination already inside the patient. Decontamination removes the active surface state, contagion and symptom loop so the patient can safely leave the incident area.

Contaminated objects use the procedure inherited from their original threat:

| Procedure | Required item | Intended use |
| --- | --- | --- |
| Wipe down | CBRN Decontamination Wipes | Cleans suitable exposed surfaces. |
| Seal | CBRN Expanding Foam Sealant | Encapsulates contamination that cannot be wiped away safely. |
| Recover | CBRN Lined Recovery Container | Removes and isolates a contaminated movable object. |
| Hazmat body bag | CBRN Hazmat Body Bag | Seals a contaminated body and clears its contamination source. |

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Create Threat | Ground or source object | Type/subtype, intensity, radius/falloff, rate, PPE, active/containable state and particles. |
| Manage Threat | Existing source/area | Changes live values or removes the threat. |
| Decontaminate Unit | A unit | Clears its current CBRN state. |
| Create Decontamination Station | Ground or object | Classname, name, direction, duration and label. |
| Manage Decontamination Station | Existing station | Changes settings or unregisters it. |
| Control System | Empty ground | Toggles CBRN, progression, transmission, PPE bypass and particles. |
| Apply Contamination | A unit | Subtype, exposure, incubation and optional test-patient state. |
| Inspect Patient | A unit | Displays protection, exact contamination, stages and burden to Zeus. |
| Set Test Patient | A unit | Marks/unmarks a patient for controlled testing. |
| Toggle Status Overlay | Empty ground | Shows or hides CBRN state above units, including clean status. |

## Multiplayer

Threats, exposure, progression, transmission, treatment and decon are server-authoritative. Detectors, particles, symptoms and reports are local presentations derived from synchronized state. ZEN-created threats/stations and overlay state are sent to JIP clients.

## Troubleshooting

- If PPE reads `0/3`, verify the equipped item is in the matching classname list and in the correct inventory slot.
- If a detector does not update, equip the configured item in the watch slot.
- If particles form only a ring, ensure the current full-area emitter implementation is loaded rather than a legacy threat script.
- If a bioassay report does not open from ACE Medical, close-conflict handling should reopen it after the ACE menu; report an RPT error if it does not.
