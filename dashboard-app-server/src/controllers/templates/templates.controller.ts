import { Controller, Get, Param } from '@nestjs/common';
import { TemplateService } from 'src/services/template/template.service';

@Controller('templates')
export class TemplatesController {

    constructor(private templateService: TemplateService) { }

    @Get()
    getTemplates() {
        return this.templateService.getTemplates();
    }

    @Get(':id')
    async getTemplate(@Param('id') id: number) {
        const ret = await this.templateService.getTemplate(id);
        if(ret){
            return ret;
        }else{
            return {found: false};
        }
    }
}
