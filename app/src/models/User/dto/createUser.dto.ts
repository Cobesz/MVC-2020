import {ApiModelProperty} from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly id: number;

    @ApiModelProperty()
    readonly firstName: string;

    @ApiModelProperty()
    readonly middleName: string;

    @ApiModelProperty()
    readonly lastName: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly password: string;

    @ApiModelProperty()
    readonly updatedOn: Date;

    @ApiModelProperty()
    readonly deletionDate: Date;
}
