// ============================================================
//  OR CASE LOG — Google Apps Script Backend
//  Paste this entire file into your Apps Script editor
//  (Extensions → Apps Script in your Google Sheet)
// ============================================================

// This runs when the sheet receives a POST request from your OR Sheet app
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // --- Build header row if sheet is empty ---
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp", "User", "Date", "Room", "Start Time",
        "MRN", "Age/Sex", "Attending", "Procedure", "Anesthesia", "ASA",
        "Port 1", "Port 2", "Port 3", "Port 4", "Port 5",
        "Position", "Prep", "Draping", "Foley", "NGT/OGT", "Bovie Pad",
        "Med 1", "Med 2", "Med 3", "Med 4",
        "VTE Prophylaxis", "Instruments", "Scope", "Special Requests",
        "Allergies",
        "Specimen 1", "Specimen 2", "Frozen Section", "Path Types",
        "Suture (Fascia)", "Suture (Skin)", "Closure", "Drain",
        "Dressing", "Glue/Staples", "Music/Setup", "Attending Other",
        "Diet", "Activity", "IVF", "Pain Mgmt", "Nausea", "Disposition Type", "Disposition",
        "Cut Time", "Close Time", "Total Time",
        "EBL (mL)", "UOP (mL)", "Fluids In", "Transfusion", "Cell Saver",
        "Misc Notes", "Intraop Events", "Checklist"
      ];
      sheet.appendRow(headers);

      // Style the header row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#1a3a5c");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(10);
      sheet.setFrozenRows(1);

      // Set column widths for readability
      sheet.setColumnWidth(1, 160);  // Timestamp
      sheet.setColumnWidth(8, 140);  // Attending
      sheet.setColumnWidth(9, 180);  // Procedure
      sheet.setColumnWidth(31, 200); // Allergies
      sheet.setColumnWidth(57, 300); // Misc Notes
      sheet.setColumnWidth(58, 300); // Intraop Events
    }

    // --- Append the case data as a new row ---
    var row = [
      data.timestamp || new Date().toISOString(),
      data.user || "",
      data.date || "",
      data.room || "",
      data.start_time || "",
      data.mrn || "",
      data.age_sex || "",
      data.attending || "",
      data.procedure || "",
      data.anesthesia || "",
      data.asa || "",
      data.port1 || "",
      data.port2 || "",
      data.port3 || "",
      data.port4 || "",
      data.port5 || "",
      data.position || "",
      data.prep || "",
      data.draping || "",
      data.foley || "",
      data.ngt || "",
      data.bovie || "",
      data.med1 || "",
      data.med2 || "",
      data.med3 || "",
      data.med4 || "",
      data.vte || "",
      data.instruments || "",
      data.scope || "",
      data.special || "",
      data.allergies || "",
      data.specimen1 || "",
      data.specimen2 || "",
      data.frozen || "",
      data.path_types || "",
      data.sut_fascia || "",
      data.sut_skin || "",
      data.closure || "",
      data.drain || "",
      data.dressing || "",
      data.glue || "",
      data.music || "",
      data.pref_other || "",
      data.diet || "",
      data.activity || "",
      data.ivf || "",
      data.pain || "",
      data.nausea || "",
      data.dispo || "",
      data.disposition || "",
      data.cut_time || "",
      data.close_time || "",
      data.total_time || "",
      data.ebl || "",
      data.uop || "",
      data.fluids || "",
      data.transfusion || "",
      data.cell_saver || "",
      data.misc_notes || "",
      data.intraop_events || "",
      data.checklist || ""
    ];

    sheet.appendRow(row);

    // Alternate row shading for readability
    var lastRow = sheet.getLastRow();
    if (lastRow % 2 === 0) {
      sheet.getRange(lastRow, 1, 1, row.length).setBackground("#f0f4f8");
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// This allows the script to respond to GET requests (used for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "OR Case Log script is running ✓" }))
    .setMimeType(ContentService.MimeType.JSON);
}
