/* eslint-disable */

export const protobufPackage = "";

export enum EContentDescriptorID {
  k_EContentDescriptor_FrequentNudityOrSexualContent = 1,
  k_EContentDescriptor_FrequentViolenceOrGore = 2,
  k_EContentDescriptor_StrongSexualContent = 3,
  k_EContentDescriptor_UNUSED_4 = 4,
  k_EContentDescriptor_AnyMatureContent = 5,
  UNRECOGNIZED = -1,
}

export function eContentDescriptorIDFromJSON(object: any): EContentDescriptorID {
  switch (object) {
    case 1:
    case "k_EContentDescriptor_FrequentNudityOrSexualContent":
      return EContentDescriptorID.k_EContentDescriptor_FrequentNudityOrSexualContent;
    case 2:
    case "k_EContentDescriptor_FrequentViolenceOrGore":
      return EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore;
    case 3:
    case "k_EContentDescriptor_StrongSexualContent":
      return EContentDescriptorID.k_EContentDescriptor_StrongSexualContent;
    case 4:
    case "k_EContentDescriptor_UNUSED_4":
      return EContentDescriptorID.k_EContentDescriptor_UNUSED_4;
    case 5:
    case "k_EContentDescriptor_AnyMatureContent":
      return EContentDescriptorID.k_EContentDescriptor_AnyMatureContent;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EContentDescriptorID.UNRECOGNIZED;
  }
}

export function eContentDescriptorIDToJSON(object: EContentDescriptorID): string {
  switch (object) {
    case EContentDescriptorID.k_EContentDescriptor_FrequentNudityOrSexualContent:
      return "k_EContentDescriptor_FrequentNudityOrSexualContent";
    case EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore:
      return "k_EContentDescriptor_FrequentViolenceOrGore";
    case EContentDescriptorID.k_EContentDescriptor_StrongSexualContent:
      return "k_EContentDescriptor_StrongSexualContent";
    case EContentDescriptorID.k_EContentDescriptor_UNUSED_4:
      return "k_EContentDescriptor_UNUSED_4";
    case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
      return "k_EContentDescriptor_AnyMatureContent";
    case EContentDescriptorID.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
