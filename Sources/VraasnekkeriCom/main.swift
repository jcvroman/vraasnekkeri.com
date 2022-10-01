import Foundation
import Publish
import Plot

// This type acts as the configuration for your website.
struct VraasnekkeriCom: Website {
    enum SectionID: String, WebsiteSectionID {
        // Add the sections that you want your website to contain here:
        case posts
        case apps
        case support
        case about
    }

    struct ItemMetadata: WebsiteItemMetadata {
        // Add any site-specific metadata that you want to use here.
    }

    // Update these properties to configure your website:
    var url = URL(string: "https://vraasnekkeri.com")!
    var name = "Vråsnekkeri"
    var description = "Vråsnekkeri: Methodically crafted."
    var language: Language { .english }
    var imagePath: Path? { "images/vraasnekkeri-logo.png" }
}

/*
public extension Theme {
    /// Based on the default "Foundation" theme that Publish ships with.
    static var vraaTheme: Self {
        Theme(
            htmlFactory: VraaThemeHTMLFactory(),
            resourcePaths: ["Resources/VraaTheme/styles.css"]
        )
    }
}
*/

// This will generate your website using the built-in Foundation theme:
try VraasnekkeriCom().publish(withTheme: .vraaTheme)
