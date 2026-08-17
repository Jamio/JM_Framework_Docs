# Cutscenes

Cutscenes are assembled from a Sequence Controller and ordered Camera Shot modules.

Give the controller a sequence ID, then give each shot the same ID and a unique order number. A shot can use fixed positions, synchronized helper objects, moving cameras, tracked targets, music, screen text and per-shot code. Intro sequences may exclude JIP players; outro sequences can hand over to Debriefing.

Triggered and mid-mission sequences are transient events. Test them with every client already connected. Outro sequences apply the ending lock and maintain the final black screen through debriefing.
