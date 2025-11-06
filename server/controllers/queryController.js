import shortQueryModel from "../models/shortQueryModel.js";
import longQueryModel from "../models/longQueryModel.js";
import sendMail from "../routes/sendMailRoute.js";

const shortQueryPostController = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({
        message: "Name, Phone, and Email are required",
        success: false,
      });
    }

    const newQuery = new shortQueryModel({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    const savedQuery = await newQuery.save();

    try {
      await sendMail({
        from: process.env.GMAIL_USERNAME,
        to: "Sales@igequipment.com",
        subject: "New Query Received | IG-Equipment",
        html: `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f8fafc;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f8fafc;">
      <tr>
        <td>
          <!-- Header -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#1e40af;">
            <tr>
              <td align="center" style="padding:32px 16px;">
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:28px;color:#ffffff;font-weight:700;">Inventive Gas Equipment</div>
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#dbeafe;margin-top:8px;">New Inquiry Received</div>
              </td>
            </tr>
          </table>

          <!-- Content -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f8fafc;">
            <tr>
              <td style="padding:32px 16px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding:32px;">
                      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:20px;color:#1e40af;font-weight:700;margin:0 0 24px 0;border-bottom:2px solid #3b82f6;padding-bottom:12px;">Customer Information</div>

                      <!-- Name Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#1e40af;font-weight:600;margin-bottom:6px;">Customer Name</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #3b82f6;">${name}</div>
                      </div>

                      <!-- Email Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#1e40af;font-weight:600;margin-bottom:6px;">Email Address</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #3b82f6;">${email}</div>
                      </div>

                      <!-- Phone Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#1e40af;font-weight:600;margin-bottom:6px;">Phone Number</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #3b82f6;">${phone}</div>
                      </div>

                      <!-- Message Section -->
                      <div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#1e40af;font-weight:600;margin-bottom:8px;">Message</div>
                        <div style="background:#eff6ff;border:2px solid #93c5fd;border-radius:8px;padding:16px;font-family:Segoe UI,Arial,sans-serif;font-size:15px;color:#1f2937;line-height:1.6;">
                          ${message || "No specific requirements mentioned."}
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#1f2937;">
            <tr>
              <td align="center" style="padding:24px 16px;">
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#9ca3af;margin-top:6px;">Inventive Gas Equipment</div>
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:12px;">This is an automated notification from your website contact form.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `,
        text: `NEW EQUIPMENT INQUIRY | Inventive Gas Equipment

Customer Information
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Message:
${message || "No specific requirements mentioned."}

---
Inventive Gas Equipment
Automated notification`,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(201).json({
      message: "Inquiry received and notification sent successfully",
      success: true,
      data: {
        id: savedQuery._id,
        name: savedQuery.name,
        phone: savedQuery.phone,
        email: savedQuery.email,
      },
    });
  } catch (err) {
    console.error("Controller error:", err);
    res.status(500).json({
      message: "Failed to process inquiry. Please try again.",
      success: false,
    });
  }
};

const longQueryPostController = async (req, res) => {
  try {
    const { name, phone, companyName, companyEmail, location, message } =
      req.body;

    if (!name || !phone || !companyName || !companyEmail || !location) {
      return res.status(400).json({
        message:
          "Name, phone, company name, company email, and location are required",
        success: false,
      });
    }

    const newQuery = new longQueryModel({
      name: name.trim(),
      phone: phone.trim(),
      companyName: companyName.trim(),
      companyEmail: companyEmail.trim(),
      location: location.trim(),
      message: message ? message.trim() : "",
    });

    const savedQuery = await newQuery.save();

    try {
      await sendMail({
        from: process.env.GMAIL_USERNAME,
        to: "sales@igequipment.com",
        subject: "New Query Received | Inventive Gas Equipment",
        html: `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f8fafc;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f8fafc;">
      <tr>
        <td>
          <!-- Header -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#059669;">
            <tr>
              <td align="center" style="padding:32px 16px;">
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:28px;color:#ffffff;font-weight:700;">Inventive Gas Equipment</div>
              </td>
            </tr>
          </table>

          <!-- Content -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#f8fafc;">
            <tr>
              <td style="padding:32px 16px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:700px;margin:0 auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="padding:32px;">
                      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:20px;color:#059669;font-weight:700;margin:0 0 24px 0;border-bottom:2px solid #10b981;padding-bottom:12px;">Company & Contact Information</div>

                      <!-- Company Name Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#059669;font-weight:600;margin-bottom:6px;">Company Name</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:18px;color:#1f2937;font-weight:700;padding:14px;background:#ecfdf5;border-radius:8px;border-left:4px solid #10b981;">${companyName}</div>
                      </div>

                      <!-- Company Email Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#059669;font-weight:600;margin-bottom:6px;">Company Email</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #10b981;">${companyEmail}</div>
                      </div>

                      <!-- Location Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#059669;font-weight:600;margin-bottom:6px;">Business Location</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #10b981;">📍 ${location}</div>
                      </div>

                      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:20px;color:#059669;font-weight:700;margin:32px 0 24px 0;border-bottom:2px solid #10b981;padding-bottom:12px;">Primary Contact Person</div>

                      <!-- Contact Name Section -->
                      <div style="margin-bottom:20px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#059669;font-weight:600;margin-bottom:6px;">Contact Person</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #10b981;">${name}</div>
                      </div>

                      <!-- Phone Section -->
                      <div style="margin-bottom:24px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#059669;font-weight:600;margin-bottom:6px;">Phone Number</div>
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;color:#1f2937;font-weight:600;padding:12px;background:#f3f4f6;border-radius:6px;border-left:4px solid #10b981;">📞 ${phone}</div>
                      </div>

                      <!-- Message Section -->
                      <div style="margin-bottom:24px;">
                        <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#059669;font-weight:600;margin-bottom:8px;">Message</div>
                        <div style="background:#f0fdfa;border:2px solid #5eead4;border-radius:8px;padding:16px;font-family:Segoe UI,Arial,sans-serif;font-size:15px;color:#1f2937;line-height:1.6;min-height:60px;">
                          ${
                            message ||
                            "No specific requirements mentioned. Please contact the company for detailed discussions."
                          }
                        </div>
                      </div>                     
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Footer -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#1f2937;">
            <tr>
              <td align="center" style="padding:24px 16px;">
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#9ca3af;margin-top:6px;">Inventive Gas Equipment</div>
                <div style="font-family:Segoe UI,Arial,sans-serif;font-size:12px;color:#6b7280;margin-top:12px;">Corporate Contact Form - Priority response required</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
        `,
        text: `New Query Received | Inventive Gas Equipment

Company Information
-------------------
Company: ${companyName}
Company Email: ${companyEmail}
Location: ${location}

Primary Contact
---------------
Name: ${name}
Phone: ${phone}

Message:
${
  message ||
  "No specific requirements mentioned. Please contact for detailed discussions."
}

Inventive Gas Equipment`,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    res.status(201).json({
      message: "Inquiry received and notification sent successfully",
      success: true,
      data: {
        id: savedQuery._id,
        name: savedQuery.name,
        phone: savedQuery.phone,
        companyName: savedQuery.companyName,
        companyEmail: savedQuery.companyEmail,
        location: savedQuery.location,
      },
    });
  } catch (err) {
    console.error("Controller error:", err);
    res.status(500).json({
      message: "Failed to process corporate inquiry. Please try again.",
      success: false,
    });
  }
};

export { shortQueryPostController, longQueryPostController };
