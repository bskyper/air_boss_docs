---
sidebar_position: 6
---

# Profile and Documents (Web Pilot)

The **Profile** page includes account info, pilot ratings, and document compliance.

## Profile fields

- Name and contact details
- Emergency contact
- Profile photo
- Pilot ratings/certifications

## Update Profile Workflow

1. Open **Profile**.
2. Update contact/emergency fields and pilot ratings.
3. Save changes.
4. Refresh to confirm persisted values.

Expected result:

- Updated values appear in profile immediately.
- Admin/member views use updated contact and qualification data.

## Document management

Per document, you can manage:

- File upload/update
- Expiration date
- Verification status visibility

The page surfaces required document count based on active club requirements.

## Document Upload Workflow

1. Open **Profile** and scroll to documents.
2. Select required document row.
3. Upload file and set expiration date if applicable.
4. Save the document update.
5. Confirm status indicators changed.

Recommended naming:

- Use clear file names with doc type and expiry year.
- Replace outdated files instead of duplicating near-identical uploads.

## Password reset

You can trigger a reset email from profile. The reset link uses the web reset-password route.

## Club context

Document requirements and compliance indicators depend on the selected active club.

## If Something Fails

### Upload fails

- Retry with smaller file size.
- Confirm supported file type.
- Refresh page and retry upload.

### Expiration date does not update

- Save after setting date (date changes are not always auto-saved).
- Confirm active club context is correct.

### Reset email not received

- Check spam/junk first.
- Verify account email in profile.
- Trigger reset again after a short wait.

## Screenshot Slots

- File: `/img/docs/web/web-profile-documents-step-01-profile-form.webp`
  Place: below `## Update Profile Workflow`
- File: `/img/docs/web/web-profile-documents-step-02-upload-document.webp`
  Place: below `## Document Upload Workflow`
