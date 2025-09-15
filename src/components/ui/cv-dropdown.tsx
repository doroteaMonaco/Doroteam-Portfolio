import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const CvDropdown = () => {
  const { t } = useLanguageContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="lg" className="w-full">
          <Download className="w-4 h-4 mr-2" />
          {t('hero.downloadCV')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <a href="/cv.pdf" download="DOROTEA MONACO CV ITA.pdf" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            {t('cv.italian')}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/cv.pdf" download="DOROTEA MONACO CV ENG.pdf" className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            {t('cv.english')}
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CvDropdown;