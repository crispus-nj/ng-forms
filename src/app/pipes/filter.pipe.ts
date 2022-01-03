import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})

export class FilterServer implements PipeTransform {
    transform(value: any, filterString: string, propName: string) {
        if (value.length === 0 || filterString === "") {
            console.log("No server name matching your criteria")
            return value
        }
        let serverName = []
        for (const item of value) {
            if (item[propName] === filterString) {
                serverName.push(item)
            }
            // if (item.status === filterString) {
            //     serverName.push(item)
            // }
        }
        return serverName
    }
}