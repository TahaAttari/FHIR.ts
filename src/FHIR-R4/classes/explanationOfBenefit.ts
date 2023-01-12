/**
 * Account-ActivityDefinition-AdverseEvent-AllergyIntolerance-Appointment-AppointmentResponse-AuditEvent-Basic-Binary-BiologicallyDerivedProduct-BodyStructure-Bundle-CapabilityStatement-CarePlan-CareTeam-CatalogEntry-ChargeItem-ChargeItemDefinition-Claim-ClaimResponse-ClinicalImpression-CodeSystem-Communication-CommunicationRequest-CompartmentDefinition-Composition-ConceptMap-Condition-Consent-Contract-Coverage-CoverageEligibilityRequest-CoverageEligibilityResponse-DetectedIssue-Device-DeviceDefinition-DeviceMetric-DeviceRequest-DeviceUseStatement-DiagnosticReport-DocumentManifest-DocumentReference-EffectEvidenceSynthesis-Encounter-Endpoint-EnrollmentRequest-EnrollmentResponse-EpisodeOfCare-EventDefinition-Evidence-EvidenceVariable-ExampleScenario-ExplanationOfBenefit-FamilyMemberHistory-Flag-Goal-GraphDefinition-Group-GuidanceResponse-HealthcareService-ImagingStudy-Immunization-ImmunizationEvaluation-ImmunizationRecommendation-ImplementationGuide-InsurancePlan-Invoice-Library-Linkage-List-Location-Measure-MeasureReport-Media-Medication-MedicationAdministration-MedicationDispense-MedicationKnowledge-MedicationRequest-MedicationStatement-MedicinalProduct-MedicinalProductAuthorization-MedicinalProductContraindication-MedicinalProductIndication-MedicinalProductIngredient-MedicinalProductInteraction-MedicinalProductManufactured-MedicinalProductPackaged-MedicinalProductPharmaceutical-MedicinalProductUndesirableEffect-MessageDefinition-MessageHeader-MolecularSequence-NamingSystem-NutritionOrder-Observation-ObservationDefinition-OperationDefinition-OperationOutcome-Organization-OrganizationAffiliation-Parameters-Patient-PaymentNotice-PaymentReconciliation-Person-PlanDefinition-Practitioner-PractitionerRole-Procedure-Provenance-Questionnaire-QuestionnaireResponse-RelatedPerson-RequestGroup-ResearchDefinition-ResearchElementDefinition-ResearchStudy-ResearchSubject-RiskAssessment-RiskEvidenceSynthesis-Schedule-SearchParameter-ServiceRequest-Slot-Specimen-SpecimenDefinition-StructureDefinition-StructureMap-Subscription-Substance-SubstanceNucleicAcid-SubstancePolymer-SubstanceProtein-SubstanceReferenceInformation-SubstanceSourceMaterial-SubstanceSpecification-SupplyDelivery-SupplyRequest-Task-TerminologyCapabilities-TestReport-TestScript-ValueSet-VerificationResult-VisionPrescription--FHIRAPI
 * Swagger for FHIR Resources Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Attachment } from './attachment';
import { Code } from './code';
import { CodeableConcept } from './codeableConcept';
import { DateTime } from './dateTime';
import { ExplanationOfBenefitAccident } from './explanationOfBenefitAccident';
import { ExplanationOfBenefitAddItem } from './explanationOfBenefitAddItem';
import { ExplanationOfBenefitAdjudication } from './explanationOfBenefitAdjudication';
import { ExplanationOfBenefitBenefitBalance } from './explanationOfBenefitBenefitBalance';
import { ExplanationOfBenefitCareTeam } from './explanationOfBenefitCareTeam';
import { ExplanationOfBenefitDiagnosis } from './explanationOfBenefitDiagnosis';
import { ExplanationOfBenefitInsurance } from './explanationOfBenefitInsurance';
import { ExplanationOfBenefitItem } from './explanationOfBenefitItem';
import { ExplanationOfBenefitPayee } from './explanationOfBenefitPayee';
import { ExplanationOfBenefitPayment } from './explanationOfBenefitPayment';
import { ExplanationOfBenefitProcedure } from './explanationOfBenefitProcedure';
import { ExplanationOfBenefitProcessNote } from './explanationOfBenefitProcessNote';
import { ExplanationOfBenefitRelated } from './explanationOfBenefitRelated';
import { ExplanationOfBenefitSupportingInfo } from './explanationOfBenefitSupportingInfo';
import { ExplanationOfBenefitTotal } from './explanationOfBenefitTotal';
import { Extension } from './extension';

import { Identifier } from './identifier';
import { Meta } from './meta';
import { Narrative } from './narrative';
import { Period } from './period';
import { PositiveInt } from './positiveInt';
import { Reference } from './reference';
import { Uri } from './uri';


/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export class ExplanationOfBenefit { 
    /**
     * This is a ExplanationOfBenefit resource
     */
    resourceType: 'ExplanationOfBenefit';
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;
    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: Meta;
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: Uri;
    /**
     * The base language in which the resource is written.
     */
    language?: Code;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: Narrative;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: Array<Extension>;
    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Array<Extension>;
    /**
     * A unique identifier assigned to this explanation of benefit.
     */
    identifier?: Array<Identifier>;
    /**
     * The status of the resource instance.
     */
    status?: ExplanationOfBenefit.StatusEnum;
    /**
     * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
     */
    type: CodeableConcept;
    /**
     * A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
     */
    subType?: CodeableConcept;
    /**
     * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
     */
    use?: Code;
    /**
     * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
     */
    patient: Reference;
    /**
     * The period for which charges are being submitted.
     */
    billablePeriod?: Period;
    /**
     * The date this resource was created.
     */
    created?: Date | string;
    /**
     * Individual who created the claim, predetermination or preauthorization.
     */
    enterer?: Reference;
    /**
     * The party responsible for authorization, adjudication and reimbursement.
     */
    insurer: Reference;
    /**
     * The provider which is responsible for the claim, predetermination or preauthorization.
     */
    provider: Reference;
    /**
     * The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
     */
    priority?: CodeableConcept;
    /**
     * A code to indicate whether and for whom funds are to be reserved for future claims.
     */
    fundsReserveRequested?: CodeableConcept;
    /**
     * A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
     */
    fundsReserve?: CodeableConcept;
    /**
     * Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
     */
    related?: Array<ExplanationOfBenefitRelated>;
    /**
     * Prescription to support the dispensing of pharmacy, device or vision products.
     */
    prescription?: Reference;
    /**
     * Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
     */
    originalPrescription?: Reference;
    /**
     * The party to be reimbursed for cost of the products and services according to the terms of the policy.
     */
    payee?: ExplanationOfBenefitPayee;
    /**
     * A reference to a referral resource.
     */
    referral?: Reference;
    /**
     * Facility where the services were provided.
     */
    facility?: Reference;
    /**
     * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
     */
    claim?: Reference;
    /**
     * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
     */
    claimResponse?: Reference;
    /**
     * The outcome of the claim, predetermination, or preauthorization processing.
     */
    outcome?: Code;
    /**
     * A human readable description of the status of the adjudication.
     */
    disposition?: string;
    /**
     * Reference from the Insurer which is used in later communications which refers to this adjudication.
     */
    preAuthRef?: Array<string>;
    /**
     * The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided.
     */
    preAuthRefPeriod?: Array<Period>;
    /**
     * The members of the team who provided the products and services.
     */
    careTeam?: Array<ExplanationOfBenefitCareTeam>;
    /**
     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
     */
    supportingInfo?: Array<ExplanationOfBenefitSupportingInfo>;
    /**
     * Information about diagnoses relevant to the claim items.
     */
    diagnosis?: Array<ExplanationOfBenefitDiagnosis>;
    /**
     * Procedures performed on the patient relevant to the billing items with the claim.
     */
    procedure?: Array<ExplanationOfBenefitProcedure>;
    /**
     * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
     */
    precedence?: PositiveInt;
    /**
     * Financial instruments for reimbursement for the health care products and services specified on the claim.
     */
    insurance: Array<ExplanationOfBenefitInsurance>;
    /**
     * Details of a accident which resulted in injuries which required the products and services listed in the claim.
     */
    accident?: ExplanationOfBenefitAccident;
    /**
     * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
     */
    item?: Array<ExplanationOfBenefitItem>;
    /**
     * The first-tier service adjudications for payor added product or service lines.
     */
    addItem?: Array<ExplanationOfBenefitAddItem>;
    /**
     * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
     */
    adjudication?: Array<ExplanationOfBenefitAdjudication>;
    /**
     * Categorized monetary totals for the adjudication.
     */
    total?: Array<ExplanationOfBenefitTotal>;
    /**
     * Payment details for the adjudication of the claim.
     */
    payment?: ExplanationOfBenefitPayment;
    /**
     * A code for the form to be used for printing the content.
     */
    formCode?: CodeableConcept;
    /**
     * The actual form, by reference or inclusion, for printing the content or an EOB.
     */
    form?: Attachment;
    /**
     * A note that describes or explains adjudication results in a human readable form.
     */
    processNote?: Array<ExplanationOfBenefitProcessNote>;
    /**
     * The term of the benefits documented in this response.
     */
    benefitPeriod?: Period;
    /**
     * Balance by Benefit Category.
     */
    benefitBalance?: Array<ExplanationOfBenefitBenefitBalance>;
}
export namespace ExplanationOfBenefit {
    export type StatusEnum = 'active' | 'cancelled' | 'draft' | 'entered-in-error';
    export const StatusEnum = {
        Active: 'active' as StatusEnum,
        Cancelled: 'cancelled' as StatusEnum,
        Draft: 'draft' as StatusEnum,
        EnteredInError: 'entered-in-error' as StatusEnum
    };
}
